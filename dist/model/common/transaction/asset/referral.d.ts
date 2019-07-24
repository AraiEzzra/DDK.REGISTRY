/// <reference types="node" />
import { Address } from '../../type';
import { Asset } from '.';
export declare type AssetReferralSchema = {
    referral: Address;
};
export declare class AssetReferral extends Asset {
    referral: Address;
    constructor(data: AssetReferralSchema);
    getCopy(): AssetReferral;
    getBytes(): Buffer;
    calculateFee(): number;
}
