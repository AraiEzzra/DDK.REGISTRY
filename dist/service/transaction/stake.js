"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("../../model/common/transaction/type");
const stake_1 = require("../../model/common/transaction/asset/stake");
const __1 = __importDefault(require("../.."));
exports.createAssetStake = (data, sender, availableAirdropBalance) => {
    const airdropReward = __1.default.rewardCalculator.calculateAirdropReward(sender, data.amount, type_1.TransactionType.STAKE, availableAirdropBalance);
    return new stake_1.AssetStake({
        airdropReward,
        amount: data.amount,
        startTime: data.createdAt,
        startVoteCount: data.startVoteCount || 0,
    });
};
