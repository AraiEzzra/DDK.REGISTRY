import { Transaction } from '../model/common/transaction';
import { Account } from '../model/common/account';
import { TransactionType } from '../model/common/transaction/type';
import { Address, AirdropReward } from '../model/common/type';
import { AssetStake } from '../model/common/transaction/asset/stake';
import { AIRDROP, STAKE } from '../const';
import { StakeSchema } from '../model/common/transaction/stake';

class StakeReward {
    private readonly milestones: Array<number>;
    private readonly distance: number;

    constructor(milestones: Array<number>, distance: number) {
        this.milestones = milestones;
        this.distance = distance;
    }

    calculateMilestone(height: number): number {
        const location = Math.trunc((height) / this.distance);
        const lastMile = this.milestones[this.milestones.length - 1];

        if (location > (this.milestones.length - 1)) {
            return this.milestones.lastIndexOf(lastMile);
        }
        return location;
    }

    calculateReward(height: number): number {
        return this.milestones[this.calculateMilestone(height)];
    }
}

const stakeReward = new StakeReward(STAKE.REWARDS.MILESTONES, STAKE.REWARDS.DISTANCE);

export const calculateTotalRewardAndUnstake = (
    trs: Transaction<AssetStake>,
    sender: Account,
    isDownVote: boolean,
    lastBlockHeight: number,
): { reward: number, unstake: number } => {
    let reward: number = 0;
    let unstake: number = 0;

    if (isDownVote) {
        return { reward, unstake: unstake };
    }

    sender.stakes
        .filter(stake => stake.isActive && trs.createdAt >= stake.nextVoteMilestone)
        .forEach((stake: StakeSchema) => {
            if (stake.voteCount > 0 && (stake.voteCount + 1) % STAKE.REWARD_VOTE_COUNT === 0) {
                const stakeRewardPercent: number = stakeReward.calculateReward(lastBlockHeight);
                reward += stake.amount * stakeRewardPercent;
            }
            if (stake.voteCount + 1 === STAKE.UNSTAKE_VOTE_COUNT) {
                unstake += stake.amount;
            }
        });

    return { reward, unstake };
};

export const getAirdropReward = (
    sender: Account,
    amount: number,
    transactionType: TransactionType,
    availableAirdropBalance: number,
): AirdropReward => {
    const result: AirdropReward = {
        sponsors: new Map<Address, number>(),
    };

    if (!amount) {
        return result;
    }

    if (!sender || !sender.referrals || (sender.referrals.length === 0)) {
        return result;
    }

    const referrals = [];
    if (transactionType === TransactionType.STAKE) {
        referrals.push(sender.referrals[0]);
    } else {
        referrals.push(...sender.referrals);
    }

    let airdropRewardAmount: number = 0;
    const sponsors: Map<Address, number> = new Map<Address, number>();

    referrals.forEach((sponsor: Account, i: number) => {
        const reward = transactionType === TransactionType.STAKE
            ? Math.ceil(amount * AIRDROP.STAKE_REWARD_PERCENT)
            : Math.ceil(AIRDROP.REFERRAL_PERCENT_PER_LEVEL[i] * amount);
        sponsors.set(sponsor.address, reward);
        airdropRewardAmount += reward;
    });

    if (availableAirdropBalance < airdropRewardAmount) {
        return result;
    }

    result.sponsors = sponsors;

    return result;
};
