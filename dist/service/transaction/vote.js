"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const vote_1 = require("../../model/common/transaction/asset/vote");
const type_1 = require("../../model/common/transaction/type");
const __1 = __importDefault(require("../.."));
exports.createAssetVote = (data, sender, lastBlockHeight, availableAirdropBalance) => {
    const { reward, unstake } = __1.default.rewardCalculator
        .calculateTotalRewardAndUnstake(data.createdAt, sender, data.type, lastBlockHeight);
    const airdropReward = __1.default.rewardCalculator
        .calculateAirdropReward(sender, reward, type_1.TransactionType.VOTE, availableAirdropBalance);
    return new vote_1.AssetVote({
        airdropReward,
        reward,
        unstake,
        type: data.type,
        votes: data.votes,
    });
};
