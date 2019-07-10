import { Address } from '../../type';
import { Asset } from '.';

export class AssetReferral extends Asset {
    referral: Address;

    constructor(data: AssetReferral) {
        super();

        this.referral = data.referral;
    }
}
