import { Timestamp } from './common/type';
import { Transaction } from './common/transaction';
import { Asset } from './common/transaction/asset';
import { clone } from '../util/clone';

export type TBlock = {
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
    relay: number;
    transactions: Array<Transaction<Asset>>;
};

export class Block {
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
    relay: number;
    transactions: Array<Transaction<Asset>>;

    constructor(data: TBlock) {
        this.id = data.id;
        this.version = data.version;
        this.createdAt = data.createdAt;
        this.height = data.height;
        this.previousBlockId = data.previousBlockId;
        this.transactionCount = data.transactionCount;
        this.amount = data.amount;
        this.fee = data.fee;
        this.payloadHash = data.payloadHash;
        this.generatorPublicKey = data.generatorPublicKey;
        this.signature = data.signature;
        this.relay = data.relay;
        this.transactions = data.transactions;
    }

    public getCopy(): Block {
        return new Block(clone(this));
    }
}
