import { Account } from './account';
import { IKeyPair } from '../../util/ed';
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
export declare enum VoteType {
    VOTE = "+",
    DOWN_VOTE = "-"
}
export declare type TransactionData = {
    senderPublicKey: PublicKey;
    type: TransactionType;
    createdAt: Timestamp;
    asset: Asset;
    salt?: string;
    id?: TransactionId;
    blockId?: BlockId;
};
export declare type TransactionCreationData = {
    data: TransactionData;
    sender: Account;
    keyPair: IKeyPair;
    secondKeyPair?: IKeyPair;
};
