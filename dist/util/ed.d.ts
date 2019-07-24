/// <reference types="node" />
export interface IKeyPair {
    publicKey: Buffer;
    privateKey: Buffer;
}
export declare class Ed {
    makeKeyPair(hash: Buffer): IKeyPair;
    sign(hash: Buffer, keyPair: IKeyPair): Buffer;
    verify(bytes: Uint8Array, publicKey: string, signature: string): boolean;
    makePublicKeyHex(hash: Buffer): string;
}
export declare const ed: Ed;
