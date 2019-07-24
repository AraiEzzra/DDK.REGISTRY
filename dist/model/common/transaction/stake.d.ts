import { Timestamp, AirdropReward } from '../type';
export declare type StakeSchema = {
    createdAt: Timestamp;
    isActive: boolean;
    amount: number;
    voteCount: number;
    nextVoteMilestone: Timestamp;
    airdropReward: AirdropReward;
    sourceTransactionId: string;
};
