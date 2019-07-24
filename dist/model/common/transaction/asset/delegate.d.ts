/// <reference types="node" />
import { Asset } from '.';
export declare type AssetDelegateSchema = {
    username: string;
};
export declare class AssetDelegate extends Asset {
    username: string;
    constructor(data: AssetDelegateSchema);
    getCopy(): AssetDelegate;
    getBytes(): Buffer;
    calculateFee(): number;
}
