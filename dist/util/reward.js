"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("../model/common/transaction/type");
const type_2 = require("../model/common/type");
class StakeRewardPercentCalculator {
    constructor(milestones, distance) {
        this.milestones = milestones;
        this.distance = distance;
    }
    calculateMilestone(height) {
        const location = Math.trunc((height) / this.distance);
        const lastMile = this.milestones[this.milestones.length - 1];
        if (location > (this.milestones.length - 1)) {
            return this.milestones.lastIndexOf(lastMile);
        }
        return location;
    }
    calculatePercent(height) {
        return this.milestones[this.calculateMilestone(height)];
    }
}
exports.StakeRewardPercentCalculator = StakeRewardPercentCalculator;
class RewardCalculator {
    constructor(rewardVoteCount, unstakeVoteCount, stakeRewardPercent, referralPercentPerLevel, percentCalculator) {
        this.rewardVoteCount = rewardVoteCount;
        this.unstakeVoteCount = unstakeVoteCount;
        this.percentCalculator = percentCalculator;
        this.stakeRewardPercent = stakeRewardPercent;
        this.referralPercentPerLevel = referralPercentPerLevel;
    }
    calculateTotalRewardAndUnstake(createdAt, sender, voteType, lastBlockHeight) {
        let reward = 0;
        let unstake = 0;
        if (voteType === type_2.VoteType.DOWN_VOTE) {
            return { reward, unstake };
        }
        sender.stakes
            .filter(stake => stake.isActive && createdAt >= stake.nextVoteMilestone)
            .forEach((stake) => {
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
    calculateAirdropReward(sender, amount, transactionType, availableAirdropBalance) {
        const airdropReward = {
            sponsors: new Map(),
        };
        if (!amount || !sender || !sender.referrals || sender.referrals.length === 0) {
            return airdropReward;
        }
        const referrals = [];
        if (transactionType === type_1.TransactionType.STAKE) {
            referrals.push(sender.referrals[0]);
        }
        else {
            referrals.push(...sender.referrals);
        }
        let airdropRewardAmount = 0;
        referrals.forEach((referral, i) => {
            const reward = transactionType === type_1.TransactionType.STAKE
                ? Math.ceil(amount * this.stakeRewardPercent)
                : Math.ceil(this.referralPercentPerLevel[i] * amount);
            airdropReward.sponsors.set(referral.address, reward);
            airdropRewardAmount += reward;
        });
        if (availableAirdropBalance < airdropRewardAmount) {
            return { sponsors: new Map() };
        }
        return airdropReward;
    }
}
exports.RewardCalculator = RewardCalculator;
exports.initRewardCalculator = (config) => {
    return new RewardCalculator(config.STAKE.REWARD_VOTE_COUNT, config.STAKE.UNSTAKE_VOTE_COUNT, config.AIRDROP.STAKE_REWARD_PERCENT, config.AIRDROP.REFERRAL_PERCENT_PER_LEVEL, new StakeRewardPercentCalculator(config.STAKE.REWARDS.MILESTONES, config.STAKE.REWARDS.DISTANCE));
};
