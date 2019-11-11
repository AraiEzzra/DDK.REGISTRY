import { Asset } from '.';
import { VoteType, AirdropReward } from '../../type';
import { clone } from '../../../../util/clone';
import BUFFER from '../../../../util/buffer';
import { Account } from '../../account';
import { StakeSchema } from '../stake';
import { CONFIG_DEFAULT } from '../../../../config';
import { calculateUtf8BytesLength } from '../../../../util/string';

export type AssetVoteSchema = {
    votes: Array<string>;
    type: VoteType;
    reward: number;
    unstake: number;
    airdropReward: AirdropReward;
};

const BUFFER_SIZE =
    BUFFER.LENGTH.INT64 + // reward
    BUFFER.LENGTH.INT64;  // unstake

const REWARD_BUFFER_SIZE =
    BUFFER.LENGTH.INT64 +  // airdropReward.address
    BUFFER.LENGTH.INT64;   // airdropReward.amount

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
        const buff = Buffer.alloc(BUFFER_SIZE);

        let offset = 0;
        offset = BUFFER.writeUInt64LE(buff, this.reward, offset);
        offset = BUFFER.writeUInt64LE(buff, this.unstake, offset);

        const sponsorsBuffer = Buffer.alloc(
            REWARD_BUFFER_SIZE * CONFIG_DEFAULT.MAX_REFERRAL_COUNT,
        );

        offset = 0;
        for (const [sponsorAddress, reward] of this.airdropReward.sponsors) {
            offset = BUFFER.writeUInt64LE(sponsorsBuffer, sponsorAddress, offset);
            offset = BUFFER.writeUInt64LE(sponsorsBuffer, reward, offset);
        }

        const voteBuffer = Buffer.from(this.votes.join(''), 'utf8');
        return Buffer.concat([buff, sponsorsBuffer, voteBuffer]);
    }

    getBufferSize(): number {
        let size = BUFFER_SIZE;
        if (this.airdropReward && this.airdropReward.sponsors.size > 0) {
            size += REWARD_BUFFER_SIZE * CONFIG_DEFAULT.MAX_REFERRAL_COUNT;
        }

        size += calculateUtf8BytesLength(this.votes.join(''));

        return size;
    }

    writeBytes(buffer: Buffer, offset: number): number {
        offset = BUFFER.writeUInt64LE(buffer, this.reward, offset);
        offset = BUFFER.writeUInt64LE(buffer, this.unstake, offset);

        for (const [sponsorAddress, reward] of this.airdropReward.sponsors) {
            offset = BUFFER.writeUInt64LE(buffer, sponsorAddress, offset);
            offset = BUFFER.writeUInt64LE(buffer, reward, offset);
        }

        if (this.airdropReward.sponsors.size < CONFIG_DEFAULT.MAX_REFERRAL_COUNT) {
            const diff = CONFIG_DEFAULT.MAX_REFERRAL_COUNT - this.airdropReward.sponsors.size;
            for (let i = 0; i < diff; i++) {
                offset = BUFFER.writeUInt64LE(buffer, 0, offset);
                offset = BUFFER.writeUInt64LE(buffer, 0, offset);
            }
        }

        offset += buffer.write(this.votes.join(''), offset, 'utf8');

        return offset;
    }

    calculateFee(sender: Account): number {
        return Math.ceil(sender.stakes.reduce(
            (sum: number, stake: StakeSchema) => sum += (stake.isActive ? stake.amount : 0),
            0,
        ) * CONFIG_DEFAULT.FEES.VOTE);
    }
}
