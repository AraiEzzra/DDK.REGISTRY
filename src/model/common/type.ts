export type SerializedAccount = object;
export type TransactionId = string;
export type BlockId = string;
export type RawTransaction = { [key: string]: any };
export type RawAsset = { [key: string]: any };
export type Address = BigInt;
export type PublicKey = string;
export type Timestamp = number;
export type AirdropReward = Map<Address, number>;

export enum VoteType {
    VOTE = '+',
    DOWN_VOTE = '-'
}
