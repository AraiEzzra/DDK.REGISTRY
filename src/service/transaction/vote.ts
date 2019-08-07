import { Account } from '../../model/common/account';
import { AssetVote } from '../../model/common/transaction/asset/vote';
import { VoteType, Timestamp } from '../../model/common/type';
import { TransactionType } from '../../model/common/transaction/type';
import DDK from '../..';

export type VoteData = {
    createdAt: Timestamp;
    type: VoteType;
    votes: Array<string>;
};

export const createAssetVote = (
    data: VoteData,
    sender: Account,
    lastBlockHeight: number,
    availableAirdropBalance: number,
): AssetVote => {
    const { reward, unstake } = DDK.rewardCalculator
        .calculateTotalRewardAndUnstake(data.createdAt, sender, data.type, lastBlockHeight);
    const airdropReward = DDK.rewardCalculator
        .calculateAirdropReward(sender, reward, TransactionType.VOTE, availableAirdropBalance);

    return new AssetVote({
        airdropReward,
        reward,
        unstake,
        type: data.type,
        votes: data.votes,
    });
};
