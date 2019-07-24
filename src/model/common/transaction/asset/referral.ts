import { Address } from '../../type';
import { Asset } from '.';
import { clone } from '../../../../util/clone';
import BUFFER from '../../../../util/buffer';

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
        const buff = Buffer.alloc(BUFFER.LENGTH.INT64);
        BUFFER.writeUInt64LE(buff, this.referral, 0);
        return buff;
    }

    calculateFee(): number {
        return 0;
    }
}
