import { Asset } from '.';
import { AirdropReward } from '../../type';

export class AssetStake extends Asset {
    amount: number;
    startTime: number;
    startVoteCount: number;
    airdropReward: AirdropReward;

    constructor(data: AssetStake) {
        super();

        this.amount = data.amount;
        this.startTime = data.startTime;
        this.startVoteCount = data.startVoteCount || 0;
        this.airdropReward = data.airdropReward;
    }
}
