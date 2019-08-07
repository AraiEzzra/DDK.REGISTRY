import { CONFIG_DEVELOPMENT } from './development';
import { CONFIG_TESTNET } from './testnet';
import { CONFIG_MAINNET } from './mainnet';

export enum WORKSPACE {
    DEVELOPMENT,
    TESTNET,
    MAINNET,
}

export type ConfigSchema = {
    MAX_REFERRAL_COUNT: number;
    SALT_LENGTH: number;
    EPOCH_TIME: number;
    SLOT_INTERVAL: number;
    MAX_VOTES_PER_TRANSACTION: number;
    FEES: {
        SEND: number;
        VOTE: number;
        SIGNATURE: number;
        DELEGATE: number;
        STAKE: number;
        SEND_STAKE: number;
    };
    AIRDROP: {
        ADDRESS: string;
        STAKE_REWARD_PERCENT: number;
        REFERRAL_PERCENT_PER_LEVEL: number[];
    };
    STAKE: {
        VOTE_MILESTONE: number;
        REWARDS: {
            MILESTONES: number[];
            DISTANCE: number;
        };
        REWARD_VOTE_COUNT: number;
        UNSTAKE_VOTE_COUNT: number;
    };
};

export const CONFIG_DEFAULT = {
    MAX_REFERRAL_COUNT: 15,
    SALT_LENGTH: 16,
    EPOCH_TIME: 1451667600000,
    SLOT_INTERVAL: 10,
    MAX_VOTES_PER_TRANSACTION: 3,
    FEES: {
        SEND: 0.0001,
        VOTE: 0.0001,
        SIGNATURE: 1000000,
        DELEGATE: 1000000000,
        STAKE: 0.0001,
        SEND_STAKE: 0.001,
    },
};

export const getConfig = (workspace: WORKSPACE) => {
    switch (workspace) {
        case WORKSPACE.DEVELOPMENT:
            return { ...CONFIG_DEFAULT, ...CONFIG_DEVELOPMENT };
        case WORKSPACE.TESTNET:
            return { ...CONFIG_DEFAULT, ...CONFIG_TESTNET };
        case WORKSPACE.MAINNET:
            return { ...CONFIG_DEFAULT, ...CONFIG_MAINNET };
        default:
            return { ...CONFIG_DEFAULT, ...CONFIG_DEVELOPMENT };
    }
};
