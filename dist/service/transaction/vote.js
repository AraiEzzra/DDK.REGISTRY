"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vote_1 = require("../../model/common/transaction/asset/vote");
const reward_1 = require("../../util/reward");
const type_1 = require("../../model/common/type");
const type_2 = require("../../model/common/transaction/type");
exports.createAssetVote = (data, sender, lastBlockHeight, availableAirdropBalance) => {
    const { reward, unstake } = reward_1.calculateTotalRewardAndUnstake(data.createdAt, sender, data.type === type_1.VoteType.DOWN_VOTE, lastBlockHeight);
    const airdropReward = reward_1.calculateAirdropReward(sender, reward, type_2.TransactionType.VOTE, availableAirdropBalance);
    return new vote_1.AssetVote({
        airdropReward,
        reward,
        unstake,
        type: data.type,
        votes: data.votes,
    });
};
