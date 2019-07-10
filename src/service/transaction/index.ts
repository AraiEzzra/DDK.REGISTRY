import crypto from 'crypto';

import { Timestamp, Address } from '../../model/common/type';
import { IAssetService } from './asset/interface';
import { TransactionType } from '../../model/common/transaction/type';
import { IKeyPair, ed } from '../../util/ed';
import { Transaction } from '../../model/common/transaction';
import { createKeyPairBySecret } from '../../util/crypto';

export type AccountData = {
    senderPublicKey: string;
    senderAddress: Address;
    secret: string;
    secondSecret?: string;
    createdAt?: Timestamp;
};

const TransactionAssetMap: { [type: string]: IAssetService<any> } = {
    [TransactionType.REGISTER]: RegisterAssetService,
    [TransactionType.SEND]: SendAssetService,
    [TransactionType.SIGNATURE]: SignatureAssetService,
    [TransactionType.DELEGATE]: DelegateAssetService,
    [TransactionType.STAKE]: StakeAssetService,
    [TransactionType.VOTE]: VoteAssetService,
};

class TransactionService<T> {

    create(type: TransactionType, accountData: AccountData, asset: T): BaseTrsRequest<T> {
        return {
            trs: {
                type,
                senderPublicKey: accountData.senderPublicKey,
                senderAddress: accountData.senderAddress,
                asset: TransactionAssetMap[type].create(asset)
            },
            secret: accountData.secret,
            ...(accountData.secondSecret && { secondSecret: accountData.secondSecret }),
        };
    }

    createPrepared(type: TransactionType, accountData: AccountData, asset: T): SerializedTransaction<T> {
        accountData.senderAddress = accountData.senderAddress
            ? accountData.senderAddress
            : getAddressByPublicKey(accountData.senderPublicKey);

        const trs = new Transaction<T>({
            createdAt: getTime(),
            senderPublicKey: accountData.senderPublicKey,
            senderAddress: accountData.senderAddress,
            type,
            salt: crypto.randomBytes(CONSTANTS.SALT_LENGTH).toString('hex')
        });

        const transactionService = TransactionAssetMap[type];
        trs.asset = transactionService.create({ ...asset, createdAt: trs.createdAt });

        const sender = new Account({ address: accountData.senderAddress, publicKey: accountData.senderPublicKey });
        trs.fee = transactionService.calculateFee(trs as UITransaction, sender);

        const keyPair = createKeyPairBySecret(accountData.secret);

        const secondKeyPair = accountData.secondSecret ? createKeyPairBySecret(accountData.secondSecret) : undefined;

        trs.signature = this.sign(keyPair, trs);
        if (secondKeyPair) {
            trs.secondSignature = this.secondSign(secondKeyPair, trs);
        }

        trs.id = this.getId(trs);

        return this.serialize(trs);
    }

    serialize(trs: Transaction<T>): SerializedTransaction<T> {
        const transactionService = TransactionAssetMap[trs.type];

        return { ...trs, asset: transactionService.serialize(trs.asset) } as SerializedTransaction<T>;
    }

    getBytes(trs: Transaction<T>, skipSignature: boolean = false, skipSecondSignature: boolean = false): Buffer {
        const transactionService = TransactionAssetMap[trs.type];
        const assetBytes = transactionService.getBytes(trs);

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
            assetBytes
        ]);
    }

    getHash(trs: Transaction<T>): Buffer {
        return crypto.createHash('sha256').update(this.getBytes(trs)).digest();
    }

    getId(trs: Transaction<T>): string {
        return this.getHash(trs).toString('hex');
    }

    sign(keyPair: IKeyPair, trs: Transaction<T>): string {
        return ed.sign(this.getHash(trs), keyPair).toString('hex');
    }

    secondSign(secondKeyPair: IKeyPair, trs: Transaction<T>): string {
        return ed.sign(this.getHash(trs), secondKeyPair).toString('hex');
    }

    validate(type: TransactionType, account: Account, asset: any): Array<string> {
        return TransactionAssetMap[type].validate(account, asset);
    }
}

export default new TransactionService();
