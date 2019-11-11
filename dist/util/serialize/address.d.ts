import { ISerializer } from '.';
export declare class AddressSerializer implements ISerializer<string, BigInt> {
    private readonly maxAddress;
    private readonly maxAddressBytesSize;
    constructor(maxAddress: BigInt, maxAddressBytesSize: number);
    serialize(data: BigInt): string;
    deserialize(raw: string): BigInt;
}
export declare const addressSerializer: AddressSerializer;
