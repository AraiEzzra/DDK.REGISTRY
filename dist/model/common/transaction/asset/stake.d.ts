/// <reference types="node" />
import { Asset } from '.';
import { AirdropReward } from '../../type';
export declare type AssetStakeSchema = {
    amount: number;
    startTime: number;
    airdropReward: AirdropReward;
    startVoteCount?: number;
};
export declare class AssetStake extends Asset {
    amount: number;
    startTime: number;
    startVoteCount: number;
    airdropReward: AirdropReward;
    constructor(data: AssetStakeSchema);
    getCopy(): AssetStake;
    getBytes(): Buffer;
    calculateFee(): number;
}
