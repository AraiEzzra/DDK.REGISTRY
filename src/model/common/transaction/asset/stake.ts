import { Asset } from '.';
import { AirdropReward } from '../../type';
import { clone } from '../../../../util/clone';
import BUFFER from '../../../../util/buffer';
import { CONFIG_DEFAULT } from '../../../../config';

export type AssetStakeSchema = {
    amount: number;
    startTime: number;
    airdropReward: AirdropReward;
    startVoteCount?: number;
};

const BUFFER_SIZE =
    BUFFER.LENGTH.INT64 +  // amount
    BUFFER.LENGTH.UINT32 + // startTime
    BUFFER.LENGTH.BYTE;    // startVoteCount

const REWARD_BUFFER_SIZE =
    BUFFER.LENGTH.INT64 +  // airdropReward.address
    BUFFER.LENGTH.INT64;   // airdropReward.amount

export class AssetStake extends Asset {
    amount: number;
    startTime: number;
    startVoteCount: number;
    airdropReward: AirdropReward;

    constructor(data: AssetStakeSchema) {
        super();

        this.amount = data.amount;
        this.startTime = data.startTime;
        this.startVoteCount = data.startVoteCount || 0;
        this.airdropReward = data.airdropReward;
    }

    getCopy(): AssetStake {
        return new AssetStake(clone(this));
    }

    getBytes(): Buffer {
        const buff = Buffer.alloc(BUFFER_SIZE);

        let offset = 0;
        offset = BUFFER.writeUInt64LE(buff, this.amount, offset);
        buff.writeInt32LE(this.startTime, offset);
        offset += BUFFER.LENGTH.UINT32;
        buff.writeInt8(this.startVoteCount, offset);

        const referralBuffer = Buffer.alloc(REWARD_BUFFER_SIZE);
        offset = 0;
        if (this.airdropReward && this.airdropReward.sponsors.size > 0) {
            for (const [sponsorAddress, reward] of this.airdropReward.sponsors) {
                offset = BUFFER.writeUInt64LE(referralBuffer, sponsorAddress.value, offset);
                BUFFER.writeUInt64LE(referralBuffer, reward, offset);
            }
        }

        return Buffer.concat([buff, referralBuffer]);
    }

    getBufferSize(): number {
        let size = BUFFER_SIZE;
        if (this.airdropReward && this.airdropReward.sponsors.size > 0) {
            size += REWARD_BUFFER_SIZE;
        }

        return size;
    }

    writeBytes(buffer: Buffer, offset: number): number {
        offset = BUFFER.writeUInt64LE(buffer, this.amount, offset);
        offset = buffer.writeInt32LE(this.startTime, offset);
        offset = buffer.writeInt8(this.startVoteCount, offset);

        if (this.airdropReward && this.airdropReward.sponsors.size > 0) {
            for (const [sponsorAddress, reward] of this.airdropReward.sponsors) {
                offset = BUFFER.writeUInt64LE(buffer, sponsorAddress.value, offset);
                offset = BUFFER.writeUInt64LE(buffer, reward, offset);
            }
        } else {
            offset = BUFFER.writeUInt64LE(buffer, 0, offset);
            offset = BUFFER.writeUInt64LE(buffer, 0, offset);
        }

        return offset;
    }

    calculateFee(): number {
        return this.amount * CONFIG_DEFAULT.FEES.STAKE;
    }
}
