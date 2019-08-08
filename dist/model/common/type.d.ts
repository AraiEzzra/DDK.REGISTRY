import { Account } from './account';
import { TransactionType } from './transaction/type';
import { Asset } from './transaction/asset';
export declare type SerializedAccount = object;
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
