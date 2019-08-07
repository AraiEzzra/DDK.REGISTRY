import { RawAsset, Timestamp, PublicKey } from '../type';
export declare enum TransactionType {
    REFERRAL = 0,
    SEND = 10,
    SIGNATURE = 20,
    DELEGATE = 30,
    STAKE = 40,
    SENDSTAKE = 50,
    VOTE = 60
}
export declare type SerializedTransaction = {
    id: string;
    blockId: string;
    type: TransactionType;
    createdAt: Timestamp;
    senderPublicKey: PublicKey;
    senderAddress: string;
    signature: string;
    secondSignature: string;
    fee: number;
    salt: string;
    relay: number;
    confirmations: number;
    asset: RawAsset;
};
