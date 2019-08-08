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
        let offset = 0;
        const buff = Buffer.alloc(
            BUFFER.LENGTH.INT64 +  // amount
            BUFFER.LENGTH.UINT32 + // startTime
            BUFFER.LENGTH.BYTE     // startVoteCount
        );
        offset = BUFFER.writeUInt64LE(buff, this.amount, offset);
        buff.writeInt32LE(this.startTime, offset);
        offset += BUFFER.LENGTH.UINT32;
        buff.writeInt8(this.startVoteCount, offset);

        const referralBuffer = Buffer.alloc(
            BUFFER.LENGTH.INT64 + // airdropReward.address
            BUFFER.LENGTH.INT64   // airdropReward.amount
        );
        offset = 0;
        if (this.airdropReward && this.airdropReward.sponsors.size > 0) {
            for (const [sponsorAddress, reward] of this.airdropReward.sponsors) {
                offset = BUFFER.writeUInt64LE(referralBuffer, sponsorAddress, offset);
                BUFFER.writeUInt64LE(referralBuffer, reward, offset);
            }
        }

        return Buffer.concat([buff, referralBuffer]);
    }

    calculateFee(): number {
        return this.amount * CONFIG_DEFAULT.FEES.STAKE;
    }
}
