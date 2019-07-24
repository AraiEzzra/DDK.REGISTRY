import { Account } from './account';
import { IKeyPair } from '../../util/ed';
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

export enum VoteType {
    VOTE = '+',
    DOWN_VOTE = '-'
}

export type TransactionData = {
    senderPublicKey: PublicKey;
    type: TransactionType;
    createdAt: Timestamp;
    asset: Asset;
    salt?: string;
    id?: TransactionId;
    blockId?: BlockId;
};

export type TransactionCreationData = {
    data: TransactionData,
    sender: Account,
    keyPair: IKeyPair,
    secondKeyPair?: IKeyPair,
};
