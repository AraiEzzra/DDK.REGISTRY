import { Asset } from '.';
import { VoteType, AirdropReward } from '../../type';

export class AssetVote extends Asset {
    votes: Array<string>;
    type: VoteType;
    reward: number;
    unstake: number;
    airdropReward: AirdropReward;

    constructor(data: AssetVote) {
        super();

        this.votes = data.votes;
        this.type = data.type;
        this.reward = data.reward;
        this.unstake = data.unstake;
        this.airdropReward = data.airdropReward;
    }
}
