/// <reference types="node" />
import { Address } from '../../type';
import { Asset } from '.';
export declare type AssetSendSchema = {
    recipientAddress: Address;
    amount: number;
};
export declare class AssetSend extends Asset {
    recipientAddress: Address;
    amount: number;
    constructor(data: AssetSendSchema);
    getCopy(): AssetSend;
    getBytes(): Buffer;
    getBufferSize(): number;
    writeBytes(buffer: Buffer, offset: number): number;
    calculateFee(): number;
}
