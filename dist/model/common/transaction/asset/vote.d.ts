/// <reference types="node" />
import { Asset } from '.';
import { VoteType, AirdropReward } from '../../type';
import { Account } from '../../account';
export declare type AssetVoteSchema = {
    votes: Array<string>;
    type: VoteType;
    reward: number;
    unstake: number;
    airdropReward: AirdropReward;
};
export declare class AssetVote extends Asset {
    votes: Array<string>;
    type: VoteType;
    reward: number;
    unstake: number;
    airdropReward: AirdropReward;
    constructor(data: AssetVoteSchema);
    getCopy(): AssetVote;
    getBytes(): Buffer;
    calculateFee(sender: Account): number;
}
