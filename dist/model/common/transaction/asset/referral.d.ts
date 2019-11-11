/// <reference types="node" />
import { Asset } from '.';
import { Address } from '../../address';
export declare type AssetReferralSchema = {
    referral: Address;
};
export declare class AssetReferral extends Asset {
    referral: Address;
    constructor(data: AssetReferralSchema);
    getCopy(): AssetReferral;
    getBytes(): Buffer;
    getBufferSize(): number;
    writeBytes(buffer: Buffer, offset: number): number;
    calculateFee(): number;
}
