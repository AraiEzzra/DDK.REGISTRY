import { Timestamp } from './type';
import { Transaction } from './transaction';
import { Asset } from './transaction/asset';
export declare type BlockSchema = {
    id: string;
    version: number;
    createdAt: Timestamp;
    height: number;
    previousBlockId: string;
    transactionCount: number;
    amount: number;
    fee: number;
    payloadHash: string;
    generatorPublicKey: string;
    signature: string;
    transactions: Array<Transaction<Asset>>;
    relay?: number;
};
export declare class Block {
    id: string;
    version: number;
    createdAt: Timestamp;
    height: number;
    previousBlockId: string;
    transactionCount: number;
    amount: number;
    fee: number;
    payloadHash: string;
    generatorPublicKey: string;
    signature: string;
    transactions: Array<Transaction<Asset>>;
    relay: number;
    constructor(data: BlockSchema);
    getCopy(): Block;
}
