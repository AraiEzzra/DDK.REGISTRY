import { Account } from './account';
import { TransactionType } from './transaction/type';
import { Asset } from './transaction/asset';
import { StakeSchema } from './transaction/stake';

export type TransactionId = string;
export type BlockId = string;
export type RawTransaction = { [key: string]: any };
export type RawAsset = { [key: string]: any };
export type Address = BigInt;
export type PublicKey = string;
export type Timestamp = number;

export type AirdropReward = { sponsors: Map<Address, number> };
export type StakeReward = { reward: number, unstake: number };

export type Direction = 'ASC' | 'DESC';
export type Sort = [string, Direction];
export type Pagination = {
    limit: number,
    offset: number,
};

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

export type SerializedDelegate = {
    username: string;
    missedBlocks: number;
    forgedBlocks: number;
    publicKey: PublicKey;
    votes: number;
    confirmedVoteCount: number;
    approval: number;
};

export type SerializedAccount = {
    address: string;
    isDelegate: boolean;
    publicKey: PublicKey;
    secondPublicKey: PublicKey;
    actualBalance: number;
    referrals: Array<string>;
    votes: Array<SerializedDelegate> | Array<string>;
    stakes: Array<StakeSchema>;
};

export type BlockchainInfoSchema = {
    airdropBalance: number;
    totalSupply: number;
    circulatingSupply: number;
    tokenHolders: number;
    totalStakeAmount: number;
    totalStakeHolders: number;
    transactionsCount: number;
};

export type SystemInfoSchema = {
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
