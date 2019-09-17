import { Address, PublicKey, Timestamp, TransactionId, BlockId } from '../type';
import { TransactionType } from './type';
import { TransactionStatus } from './status';
import { Asset } from './asset';
export declare type TransactionSchema<T extends Asset> = {
    id: TransactionId;
    blockId: BlockId;
    type: TransactionType;
    senderPublicKey: PublicKey;
    signature: string;
    secondSignature?: string;
    createdAt: Timestamp;
    salt?: string;
    asset: T;
    fee: number;
    confirmations?: number;
    status?: TransactionStatus;
    relay?: number;
    senderAddress?: Address;
};
export declare class Transaction<T extends Asset = any> {
    id: TransactionId;
    blockId: BlockId;
    type: TransactionType;
    senderPublicKey: PublicKey;
    signature: string;
    secondSignature: string;
    createdAt: Timestamp;
    salt: string;
    asset: T;
    confirmations: number;
    relay: number;
    fee: number;
    status: TransactionStatus;
    senderAddress: Address;
    constructor(data: TransactionSchema<T>);
    getCopy(): Transaction<T>;
}
