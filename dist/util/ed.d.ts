/// <reference types="node" />
import { IKeyPair } from '../model/common/keyPair';
export declare class Ed {
    makeKeyPair(hash: Buffer): IKeyPair;
    sign(hash: Buffer, keyPair: IKeyPair): Buffer;
    verify(bytes: Uint8Array, publicKey: string, signature: string): boolean;
    makePublicKeyHex(hash: Buffer): string;
}
export declare const ed: Ed;
