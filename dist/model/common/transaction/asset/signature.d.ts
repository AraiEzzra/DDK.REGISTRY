/// <reference types="node" />
import { Asset } from '.';
import { PublicKey } from '../../type';
export declare type AssetSignatureSchema = {
    publicKey: PublicKey;
};
export declare class AssetSignature extends Asset {
    publicKey: PublicKey;
    constructor(data: AssetSignatureSchema);
    getCopy(): AssetSignature;
    getBytes(): Buffer;
    getBufferSize(): number;
    writeBytes(buffer: Buffer, offset: number): number;
    calculateFee(): number;
}
