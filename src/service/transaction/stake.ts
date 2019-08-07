import { Account } from '../../model/common/account';
import { Timestamp } from '../../model/common/type';
import { TransactionType } from '../../model/common/transaction/type';
import { AssetStake } from '../../model/common/transaction/asset/stake';
import DDK from '../..';

export type StakeData = {
    createdAt: Timestamp;
    amount: number;
    startVoteCount?: number;
};

export const createAssetStake = (
    data: StakeData,
    sender: Account,
    availableAirdropBalance: number,
): AssetStake => {
    const airdropReward = DDK.rewardCalculator.calculateAirdropReward(
        sender,
        data.amount,
        TransactionType.STAKE,
        availableAirdropBalance,
    );

    return new AssetStake({
        airdropReward,
        amount: data.amount,
        startTime: data.createdAt,
        startVoteCount: data.startVoteCount || 0,
    });
};
