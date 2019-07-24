/// <reference types="node" />
declare class BUFFER {
    readonly LENGTH: {
        BYTE: number;
        UINT32: number;
        INT64: number;
        SALT: number;
        PUBLIC_KEY: number;
        SIGNATURE: number;
    };
    stringNullGenerator(count: number): string;
    writeInt8(buff: Buffer, int8: number, offset: number): number;
    writeInt32LE(buff: Buffer, int32: number, offset: number): number;
    writeUInt64LE(buff: Buffer, bigint: number | BigInt, offset: number): number;
    writeNotNull(buff: Buffer, val: string, offset: number, len: number): number;
}
declare const _default: BUFFER;
export default _default;
