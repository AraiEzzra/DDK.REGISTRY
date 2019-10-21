import { Account } from './account';
import { TransactionType } from './transaction/type';
import { Asset } from './transaction/asset';
import { StakeSchema } from './transaction/stake';
export declare type TransactionId = string;
export declare type BlockId = string;
export declare type RawTransaction = {
    [key: string]: any;
};
export declare type RawAsset = {
    [key: string]: any;
};
export declare type Address = BigInt;
export declare type PublicKey = string;
export declare type Timestamp = number;
export declare type AirdropReward = {
    sponsors: Map<Address, number>;
};
export declare type StakeReward = {
    reward: number;
    unstake: number;
};
export declare type Direction = 'ASC' | 'DESC';
export declare type Sort = [string, Direction];
export declare type Pagination = {
    limit: number;
    offset: number;
};
export declare enum VoteType {
    VOTE = "+",
    DOWN_VOTE = "-"
}
export declare type TransactionData = {
    type: TransactionType;
    asset: Asset;
    createdAt?: Timestamp;
    salt?: string;
};
export declare type TransactionCreationData = {
    data: TransactionData;
    sender: Account;
    secret: string;
    secondSecret?: string;
};
export declare type EpochTime = number;
export declare enum LENGTH {
    PUBLIC_KEY = 32,
    ID = 32,
    SIGNATURE = 64
}
export declare type SerializedDelegate = {
    username: string;
    missedBlocks: number;
    forgedBlocks: number;
    publicKey: PublicKey;
    votes: number;
    confirmedVoteCount: number;
    approval: number;
};
export declare type SerializedAccount = {
    address: string;
    isDelegate: boolean;
    publicKey: PublicKey;
    secondPublicKey: PublicKey;
    actualBalance: number;
    referrals: Array<string>;
    votes: Array<SerializedDelegate> | Array<string>;
    stakes: Array<StakeSchema>;
};
export declare type BlockchainInfoSchema = {
    airdropBalance: number;
    totalSupply: number;
    circulatingSupply: number;
    tokenHolders: number;
    totalStakeAmount: number;
    totalStakeHolders: number;
    transactionsCount: number;
};
export declare type SystemInfoSchema = {
    height: number;
    consensus: number;
    datetime: Date;
    transactionsCount: {
        queue: number;
        conflictedQueue: number;
        pool: number;
    };
    peersCount: number;
    peers: Array<any>;
    broadhash: string;
    version: string;
};
