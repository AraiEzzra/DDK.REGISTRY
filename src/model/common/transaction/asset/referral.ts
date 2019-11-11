import { Asset } from '.';
import { clone } from '../../../../util/clone';
import BUFFER from '../../../../util/buffer';
import { ADDRESS_LENGTH } from '../../../../util/transaction';
import { Address } from '../../address';

export type AssetReferralSchema = {
    referral: Address;
};

export class AssetReferral extends Asset {
    referral: Address;

    constructor(data: AssetReferralSchema) {
        super();

        this.referral = data.referral;
    }

    getCopy(): AssetReferral {
        return new AssetReferral(clone(this));
    }

    getBytes(): Buffer {
        const buff = Buffer.alloc(ADDRESS_LENGTH);
        BUFFER.writeUInt64LE(buff, this.referral.value, 0);
        return buff;
    }

    getBufferSize(): number {
        return ADDRESS_LENGTH;
    }

    writeBytes(buffer: Buffer, offset: number): number {
        return BUFFER.writeUInt64LE(buffer, this.referral.value, offset);
    }

    calculateFee(): number {
        return 0;
    }
}
