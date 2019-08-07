"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const reward_1 = require("../../util/reward");
const type_1 = require("../../model/common/transaction/type");
const stake_1 = require("../../model/common/transaction/asset/stake");
exports.createAssetStake = (data, sender, availableAirdropBalance) => {
    const airdropReward = reward_1.calculateAirdropReward(sender, data.amount, type_1.TransactionType.STAKE, availableAirdropBalance);
    return new stake_1.AssetStake({
        airdropReward,
        amount: data.amount,
        startTime: data.createdAt,
        startVoteCount: data.startVoteCount || 0,
    });
};
