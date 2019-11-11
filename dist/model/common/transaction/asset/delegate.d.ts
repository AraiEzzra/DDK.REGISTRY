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
    getBufferSize(): number;
    writeBytes(buffer: Buffer, offset: number): number;
    calculateFee(): number;
}
