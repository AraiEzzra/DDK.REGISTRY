import crypto from 'crypto';

import { Transaction, TransactionSchema } from '../../model/common/transaction';
import { IKeyPair, Ed, ed } from '../../util/ed';
import { TransactionType } from '../../model/common/transaction/type';
import { ResponseEntity } from '../../model/common/responseEntity';
import { getAddressByPublicKey } from '../../util/account';
import { TRANSACTION_BUFFER_SIZE, SIGNATURE_LENGTH } from '../../util/transaction';
import { Asset } from '../../model/common/transaction/asset';
import { TransactionCreationData } from '../../model/common/type';
import { createKeyPairBySecret } from '../../util/crypto';
import { slotService } from '../slot';
import { CONFIG_DEFAULT } from '../../config';

export interface ITransactionCreator {
    create(params: TransactionCreationData): ResponseEntity<Transaction<any>>;

    getBytes(
        trs: TransactionSchema<Asset>,
        skipSignature: boolean,
        skipSecondSignature: boolean,
    ): Buffer;

    getHash(trs: TransactionSchema<Asset>): Buffer;
}

export class TransactionCreator implements ITransactionCreator {
    private ed: Ed;

    constructor(_ed: Ed) {
        this.ed = _ed;
    }

    create(params: TransactionCreationData): ResponseEntity<Transaction<any>> {
        const { data, sender, secret, secondSecret } = params;
        const keyPair = createKeyPairBySecret(secret);
        const errors = [];

        if (!TransactionType[data.type]) {
            errors.push(`Unknown transaction type ${data.type}`);
            return new ResponseEntity({ errors });
        }

        const senderPublicKey = keyPair.publicKey.toString('hex');
        const transaction: any = {
            ...data,
            senderPublicKey,
            senderAddress: getAddressByPublicKey(senderPublicKey),
            fee: data.asset.calculateFee(sender),
        };
        if (!transaction.salt) {
            transaction.salt = crypto.randomBytes(CONFIG_DEFAULT.SALT_LENGTH).toString('hex');
        }
        if (!transaction.createdAt) {
            transaction.createdAt = slotService.getTime();
        }
        transaction.signature = this.sign(keyPair, transaction);
        if (secondSecret) {
            const secondKeyPair = createKeyPairBySecret(secondSecret);
            transaction.secondSignature = this.sign(secondKeyPair, transaction);
        }
        transaction.id = this.getId(transaction);

        return new ResponseEntity({ data: new Transaction<any>(transaction) });
    }

    getBytes(
        trs: TransactionSchema<Asset>,
        skipSignature: boolean = false,
        skipSecondSignature: boolean = false,
    ): Buffer {
        let bufferSize = TRANSACTION_BUFFER_SIZE + trs.asset.getBufferSize();
        if (!skipSignature && trs.signature) {
            bufferSize += SIGNATURE_LENGTH;
        }
        if (!skipSecondSignature && trs.secondSignature) {
            bufferSize += SIGNATURE_LENGTH;
        }

        const bytes = Buffer.allocUnsafe(bufferSize);

        let offset = 0;
        offset = bytes.writeInt8(trs.type, offset);
        offset = bytes.writeUInt32LE(trs.createdAt, offset);
        offset += bytes.write(trs.salt, offset, 'hex');
        offset += bytes.write(trs.senderPublicKey, offset, 'hex');

        if (!skipSignature && trs.signature) {
            offset += bytes.write(trs.signature, offset, 'hex');
        }
        if (!skipSecondSignature && trs.secondSignature) {
            offset += bytes.write(trs.secondSignature, offset, 'hex');
        }

        trs.asset.writeBytes(bytes, offset);

        return bytes;
    }

    getHash(trs: TransactionSchema<Asset>): Buffer {
        return crypto.createHash('sha256').update(this.getBytes(trs)).digest();
    }

    getId(trs: TransactionSchema<any>): string {
        return this.getHash(trs).toString('hex');
    }

    private sign(keyPair: IKeyPair, trs: TransactionSchema<Asset>): string {
        return this.ed.sign(this.getHash(trs), keyPair).toString('hex');
    }
}

export const transactionCreator = new TransactionCreator(ed);
