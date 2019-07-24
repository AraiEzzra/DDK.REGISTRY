import { Asset } from '.';
import { VoteType, AirdropReward } from '../../type';
import { clone } from '../../../../util/clone';
import BUFFER from '../../../../util/buffer';
import { Account } from '../../account';
import { StakeSchema } from '../stake';
import { FEES, MAX_REFERRAL_COUNT } from '../../../../const';

export type AssetVoteSchema = {
    votes: Array<string>;
    type: VoteType;
    reward: number;
    unstake: number;
    airdropReward: AirdropReward;
};

export class AssetVote extends Asset {
    votes: Array<string>;
    type: VoteType;
    reward: number;
    unstake: number;
    airdropReward: AirdropReward;

    constructor(data: AssetVoteSchema) {
        super();

        this.votes = data.votes;
        this.type = data.type;
        this.reward = data.reward;
        this.unstake = data.unstake;
        this.airdropReward = data.airdropReward;
    }

    getCopy(): AssetVote {
        return new AssetVote(clone(this));
    }

    getBytes(): Buffer {
        let offset = 0;
        const buff = Buffer.alloc(
            BUFFER.LENGTH.INT64 + // reward
            BUFFER.LENGTH.INT64   // unstake
        );

        offset = BUFFER.writeUInt64LE(buff, this.reward, offset);
        offset = BUFFER.writeUInt64LE(buff, this.unstake, offset);

        const sponsorsBuffer = Buffer.alloc(
            (BUFFER.LENGTH.INT64 + BUFFER.LENGTH.INT64) * MAX_REFERRAL_COUNT,
        );

        offset = 0;
        for (const [sponsorAddress, reward] of this.airdropReward.sponsors) {
            offset = BUFFER.writeUInt64LE(sponsorsBuffer, sponsorAddress, offset);
            offset = BUFFER.writeUInt64LE(sponsorsBuffer, reward, offset);
        }

        const voteBuffer = Buffer.from(this.votes.join(''), 'utf8');
        return Buffer.concat([buff, sponsorsBuffer, voteBuffer]);
    }

    calculateFee(sender: Account): number {
        return Math.ceil(sender.stakes.reduce(
            (sum: number, stake: StakeSchema) => sum += (stake.isActive ? stake.amount : 0),
            0,
        ) * FEES.VOTE);
    }
}
