import { Account } from '../../model/common/account';
import { AssetVote } from '../../model/common/transaction/asset/vote';
import { VoteType, Timestamp } from '../../model/common/type';
export declare type VoteData = {
    createdAt: Timestamp;
    type: VoteType;
    votes: Array<string>;
};
export declare const createAssetVote: (data: VoteData, sender: Account, lastBlockHeight: number, availableAirdropBalance: number) => AssetVote;
