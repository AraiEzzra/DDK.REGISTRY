import { Account } from '../model/common/account';
import { TransactionType } from '../model/common/transaction/type';
import { Address, AirdropReward, Timestamp, StakeReward, VoteType } from '../model/common/type';
import { StakeSchema } from '../model/common/transaction/stake';
import { WORKSPACE, getConfig } from '../config';

export interface IStakeRewardPercentCalculator {
    calculatePercent(height: number): number;
}

export class StakeRewardPercentCalculator implements IStakeRewardPercentCalculator {
    private readonly milestones: Array<number>;
    private readonly distance: number;

    constructor(milestones: Array<number>, distance: number) {
        this.milestones = milestones;
        this.distance = distance;
    }

    private calculateMilestone(height: number): number {
        const location = Math.trunc((height) / this.distance);
        const lastMile = this.milestones[this.milestones.length - 1];

        if (location > (this.milestones.length - 1)) {
            return this.milestones.lastIndexOf(lastMile);
        }
        return location;
    }

    calculatePercent(height: number): number {
        return this.milestones[this.calculateMilestone(height)];
    }
}

export interface IRewardCalculator {
    calculateTotalRewardAndUnstake(
        createdAt: Timestamp,
        sender: Account,
        voteType: VoteType,
        lastBlockHeight: number,
    ): StakeReward;
    calculateAirdropReward(
        sender: Account,
        amount: number,
        transactionType: TransactionType,
        availableAirdropBalance: number,
    ): AirdropReward;
}

export class RewardCalculator implements IRewardCalculator {
    private readonly percentCalculator: IStakeRewardPercentCalculator;
    private readonly rewardVoteCount: number;
    private readonly unstakeVoteCount: number;
    private readonly stakeRewardPercent: number;
    private readonly referralPercentPerLevel: Array<number>;

    constructor(
        rewardVoteCount: number,
        unstakeVoteCount: number,
        stakeRewardPercent: number,
        referralPercentPerLevel: Array<number>,
        percentCalculator: IStakeRewardPercentCalculator,
    ) {
        this.rewardVoteCount = rewardVoteCount;
        this.unstakeVoteCount = unstakeVoteCount;
        this.percentCalculator = percentCalculator;
        this.stakeRewardPercent = stakeRewardPercent;
        this.referralPercentPerLevel = referralPercentPerLevel;
    }

    calculateTotalRewardAndUnstake(
        createdAt: Timestamp,
        sender: Account,
        voteType: VoteType,
        lastBlockHeight: number,
    ): StakeReward {
        let reward: number = 0;
        let unstake: number = 0;

        if (voteType === VoteType.DOWN_VOTE) {
            return { reward, unstake };
        }

        sender.stakes
            .filter(stake => stake.isActive && createdAt >= stake.nextVoteMilestone)
            .forEach((stake: StakeSchema) => {
                const nextVoteCount = stake.voteCount + 1;
                if (stake.voteCount > 0 && nextVoteCount % this.rewardVoteCount === 0) {
                    const stakeRewardPercent = this.percentCalculator.calculatePercent(lastBlockHeight);
                    reward += stake.amount * stakeRewardPercent;
                }
                if (nextVoteCount === this.unstakeVoteCount) {
                    unstake += stake.amount;
                }
            });

        return { reward, unstake };
    }

    calculateAirdropReward(
        sender: Account,
        amount: number,
        transactionType: TransactionType,
        availableAirdropBalance: number,
    ): AirdropReward {
        const airdropReward: AirdropReward = {
            sponsors: new Map<Address, number>(),
        };

        if (!amount || !sender || !sender.referrals || sender.referrals.length === 0) {
            return airdropReward;
        }

        const referrals = [];
        if (transactionType === TransactionType.STAKE) {
            referrals.push(sender.referrals[0]);
        } else {
            referrals.push(...sender.referrals);
        }

        let airdropRewardAmount: number = 0;
        referrals.forEach((referral: Account, i: number) => {
            const reward = transactionType === TransactionType.STAKE
                ? Math.ceil(amount * this.stakeRewardPercent)
                : Math.ceil(this.referralPercentPerLevel[i] * amount);
            airdropReward.sponsors.set(referral.address, reward);
            airdropRewardAmount += reward;
        });

        if (availableAirdropBalance < airdropRewardAmount) {
            return { sponsors: new Map<Address, number>() };
        }

        return airdropReward;
    }
}

export const initRewardCalculator = (workspace: WORKSPACE): IRewardCalculator => {
    const config = getConfig(workspace);

    return new RewardCalculator(
        config.STAKE.REWARD_VOTE_COUNT,
        config.STAKE.UNSTAKE_VOTE_COUNT,
        config.AIRDROP.STAKE_REWARD_PERCENT,
        config.AIRDROP.REFERRAL_PERCENT_PER_LEVEL,
        new StakeRewardPercentCalculator(
            config.STAKE.REWARDS.MILESTONES,
            config.STAKE.REWARDS.DISTANCE,
        ),
    );
};
