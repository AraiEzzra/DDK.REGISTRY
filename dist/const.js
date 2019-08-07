"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TOTAL_PERCENTAGE = 100;
exports.DEFAULT_FRACTION_DIGIST = 2;
exports.SECOND = 1000;
exports.FEES = {
    SEND: 0.0001,
    VOTE: 0.0001,
    SIGNATURE: 1000000,
    DELEGATE: 1000000000,
    STAKE: 0.0001,
    SEND_STAKE: 0.001,
};
exports.AIRDROP = {
    ADDRESS: '11696703665952770027',
    STAKE_REWARD_PERCENT: 0.1,
    REFERRAL_PERCENT_PER_LEVEL: [
        0.05, 0.03, 0.02, 0.02, 0.01, 0.01, 0.01, 0.009, 0.008, 0.007, 0.006, 0.005, 0.005, 0.005, 0.005,
    ],
};
exports.STAKE = {
    VOTE_MILESTONE: 604800,
    REWARDS: {
        MILESTONES: [
            0.1,
            0.1,
            0.1,
            0.1,
            0.1,
            0.1 // 2% For 31 months and above
        ],
        DISTANCE: 30,
    },
    REWARD_VOTE_COUNT: 4,
    UNSTAKE_VOTE_COUNT: 24,
};
exports.MAX_REFERRAL_COUNT = 15;
exports.SALT_LENGTH = 16;
exports.EPOCH_TIME = 1451667600000;
exports.SLOT_INTERVAL = 10;
exports.MAX_VOTES_PER_TRANSACTION = 3;
exports.MIN_LIMIT = 1;
exports.MAX_LIMIT = 100;
exports.MIN_OFFSET = 0;
