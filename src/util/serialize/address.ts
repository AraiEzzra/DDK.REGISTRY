import { ISerializer } from '.';
import { ADDRESS_BYTES_LENGTH } from '../../const';
import BUFFER, { bufferToHex } from '../buffer';
import { MAX_ADDRESS } from '../../unsafeConst';

export class AddressSerializer implements ISerializer<string, BigInt> {
    private readonly maxAddress: BigInt;
    private readonly maxAddressBytesSize: number;

    constructor(maxAddress: BigInt, maxAddressBytesSize: number) {
        this.maxAddress = maxAddress;
        this.maxAddressBytesSize = maxAddressBytesSize;
    }

    serialize(data: BigInt): string {
        return data.toString();
    }

    deserialize(raw: string): BigInt {
        const tmp = BigInt(raw);
        if (tmp <= this.maxAddress) {
            return tmp;
        }

        const buffer = Buffer.allocUnsafe(this.maxAddressBytesSize);
        BUFFER.writeUInt64LE(buffer, tmp);

        return BigInt(bufferToHex(buffer));
    }
}

export const addressSerializer = new AddressSerializer(MAX_ADDRESS, ADDRESS_BYTES_LENGTH);
