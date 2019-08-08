export const CONFIG_TESTNET = {
    AIRDROP: {
        ADDRESS: '7897332094363171058',
        STAKE_REWARD_PERCENT: 0.1,
        REFERRAL_PERCENT_PER_LEVEL: [
            0.05, 0.03, 0.02, 0.02, 0.01, 0.01, 0.01, 0.009, 0.008, 0.007, 0.006, 0.005, 0.005, 0.005, 0.005,
        ],
    },
    STAKE: {
        VOTE_MILESTONE: 10, // in seconds
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
        REWARD_VOTE_COUNT: 2,
        UNSTAKE_VOTE_COUNT: 4,
    },
};
