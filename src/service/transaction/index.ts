import crypto from 'crypto';

import { Transaction, TransactionSchema } from '../../model/common/transaction';
import { IKeyPair, Ed, ed } from '../../util/ed';
import { PublicKey, Timestamp, TransactionId, BlockId } from '../../model/common/type';
import { TransactionType } from '../../model/common/transaction/type';
import { ResponseEntity } from '../../model/responseEntity';
import { getAddressByPublicKey } from '../../util/account';
import BUFFER from '../../util/buffer';
import { TRANSACTION_BUFFER_SIZE } from '../../util/transaction';
import { Asset } from '../../model/common/transaction/asset';
import { Account } from '../../model/common/account';

export type TransactionData = {
    senderPublicKey: PublicKey;
    type: TransactionType;
    createdAt: Timestamp;
    asset: Asset;
    salt?: string;
    id?: TransactionId;
    blockId?: BlockId;
};

export interface ITransactionCreator {
    create(
        data: TransactionData,
        sender: Account,
        keyPair: IKeyPair,
        secondKeyPair?: IKeyPair,
    ): ResponseEntity<Transaction<any>>;

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

    create(
        data: TransactionData,
        sender: Account,
        keyPair: IKeyPair,
        secondKeyPair?: IKeyPair,
    ): ResponseEntity<Transaction<any>> {
        const errors = [];

        if (!TransactionType[data.type]) {
            errors.push(`Unknown transaction type ${data.type}`);
            return new ResponseEntity({ errors });
        }

        const transaction: any = {
            ...data,
            senderAddress: getAddressByPublicKey(data.senderPublicKey),
            fee: data.asset.calculateFee(sender),
        };
        transaction.signature = this.sign(keyPair, transaction);
        if (secondKeyPair) {
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
        const assetBytes = trs.asset.getBytes();

        const bytes = Buffer.alloc(TRANSACTION_BUFFER_SIZE);
        let offset = 0;

        offset = BUFFER.writeInt8(bytes, trs.type, offset);
        BUFFER.writeInt32LE(bytes, trs.createdAt, offset);

        return Buffer.concat([
            bytes,
            Buffer.from(trs.salt, 'hex'),
            Buffer.from(trs.senderPublicKey, 'hex'),
            Buffer.from(!skipSignature && trs.signature ? trs.signature : '', 'hex'),
            Buffer.from(!skipSecondSignature && trs.secondSignature ? trs.secondSignature : '', 'hex'),
            assetBytes,
        ]);
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

export default new TransactionCreator(ed);
