"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("../model/common/transaction/type");
const const_1 = require("../const");
class StakeReward {
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
    calculateReward(height) {
        return this.milestones[this.calculateMilestone(height)];
    }
}
const stakeReward = new StakeReward(const_1.STAKE.REWARDS.MILESTONES, const_1.STAKE.REWARDS.DISTANCE);
exports.calculateTotalRewardAndUnstake = (createdAt, sender, isDownVote, lastBlockHeight) => {
    let reward = 0;
    let unstake = 0;
    if (isDownVote) {
        return { reward, unstake: unstake };
    }
    sender.stakes
        .filter(stake => stake.isActive && createdAt >= stake.nextVoteMilestone)
        .forEach((stake) => {
        if (stake.voteCount > 0 && (stake.voteCount + 1) % const_1.STAKE.REWARD_VOTE_COUNT === 0) {
            const stakeRewardPercent = stakeReward.calculateReward(lastBlockHeight);
            reward += stake.amount * stakeRewardPercent;
        }
        if (stake.voteCount + 1 === const_1.STAKE.UNSTAKE_VOTE_COUNT) {
            unstake += stake.amount;
        }
    });
    return { reward, unstake };
};
exports.calculateAirdropReward = (sender, amount, transactionType, availableAirdropBalance) => {
    const result = {
        sponsors: new Map(),
    };
    if (!amount) {
        return result;
    }
    if (!sender || !sender.referrals || (sender.referrals.length === 0)) {
        return result;
    }
    const referrals = [];
    if (transactionType === type_1.TransactionType.STAKE) {
        referrals.push(sender.referrals[0]);
    }
    else {
        referrals.push(...sender.referrals);
    }
    let airdropRewardAmount = 0;
    const sponsors = new Map();
    referrals.forEach((sponsor, i) => {
        const reward = transactionType === type_1.TransactionType.STAKE
            ? Math.ceil(amount * const_1.AIRDROP.STAKE_REWARD_PERCENT)
            : Math.ceil(const_1.AIRDROP.REFERRAL_PERCENT_PER_LEVEL[i] * amount);
        sponsors.set(sponsor.address, reward);
        airdropRewardAmount += reward;
    });
    if (availableAirdropBalance < airdropRewardAmount) {
        return result;
    }
    result.sponsors = sponsors;
    return result;
};
