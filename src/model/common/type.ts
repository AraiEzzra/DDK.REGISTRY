import { Account } from './account';
import { TransactionType } from './transaction/type';
import { Asset } from './transaction/asset';

export type SerializedAccount = object;
export type TransactionId = string;
export type BlockId = string;
export type RawTransaction = { [key: string]: any };
export type RawAsset = { [key: string]: any };
export type Address = BigInt;
export type PublicKey = string;
export type Timestamp = number;

export type AirdropReward = { sponsors: Map<Address, number> };
export type StakeReward = { reward: number, unstake: number };

export enum VoteType {
    VOTE = '+',
    DOWN_VOTE = '-'
}

export type TransactionData = {
    type: TransactionType;
    asset: Asset;
    createdAt?: Timestamp;
    salt?: string;
};

export type TransactionCreationData = {
    data: TransactionData,
    sender: Account,
    secret: string,
    secondSecret?: string,
};

export type EpochTime = number;

export enum LENGTH {
    PUBLIC_KEY = 32,
    ID = 32,
    SIGNATURE = 64,
}
