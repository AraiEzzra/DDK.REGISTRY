export const TOTAL_PERCENTAGE = 100;
export const DEFAULT_FRACTION_DIGIST = 2;
export const SECOND = 1000;

export const FEES = {
    SEND: 0.0001,
    VOTE: 0.0001,
    SIGNATURE: 1000000,
    DELEGATE: 1000000000,
    STAKE: 0.0001,
    SEND_STAKE: 0.001,
};
export const AIRDROP = {
    ADDRESS: '11696703665952770027',
    STAKE_REWARD_PERCENT: 0.1,
    REFERRAL_PERCENT_PER_LEVEL: [
        0.05, 0.03, 0.02, 0.02, 0.01, 0.01, 0.01, 0.009, 0.008, 0.007, 0.006, 0.005, 0.005, 0.005, 0.005,
    ],
};
export const STAKE = {
    VOTE_MILESTONE: 604800, // in seconds
    REWARDS: {
        MILESTONES: [
            0.1, // 10% For 0-6 months
            0.1, // 10% For 7-12 months
            0.1, // 8% For 13-18 months
            0.1, // 6% For 19-24 months
            0.1, // 4% For 25-30 months
            0.1  // 2% For 31 months and above
        ],
        DISTANCE: 30, // Distance between each milestone is 6 months
    },
    REWARD_VOTE_COUNT: 4,
    UNSTAKE_VOTE_COUNT: 24,
};
export const MAX_REFERRAL_COUNT = 15;
export const SALT_LENGTH = 16;
export const EPOCH_TIME = 1451667600000;
export const SLOT_INTERVAL = 10;
export const MAX_VOTES_PER_TRANSACTION = 3;

export const MIN_LIMIT = 1;
export const MAX_LIMIT = 100;
export const MIN_OFFSET = 0;
