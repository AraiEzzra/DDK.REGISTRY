import { Address } from '../../type';
import { Asset } from '.';
import { clone } from '../../../../util/clone';
import BUFFER from '../../../../util/buffer';
import { CONFIG_DEFAULT } from '../../../../config';

export type AssetSendSchema = {
    recipientAddress: Address;
    amount: number;
};

const bufferSize =
    BUFFER.LENGTH.INT64 + // recipientAddress
    BUFFER.LENGTH.INT64;  // amount

export class AssetSend extends Asset {
    recipientAddress: Address;
    amount: number;

    constructor(data: AssetSendSchema) {
        super();

        this.recipientAddress = data.recipientAddress;
        this.amount = data.amount;
    }

    getCopy(): AssetSend {
        return new AssetSend(clone(this));
    }

    getBytes(): Buffer {
        const buff = Buffer.allocUnsafe(bufferSize);
        let offset = BUFFER.writeUInt64LE(buff, this.recipientAddress, 0);
        BUFFER.writeUInt64LE(buff, this.amount, offset);
        return buff;
    }

    getBufferSize(): number {
        return bufferSize;
    }

    writeBytes(buffer: Buffer, offset: number): number {
        offset = BUFFER.writeUInt64LE(buffer, this.recipientAddress, offset);
        return BUFFER.writeUInt64LE(buffer, this.amount, offset);
    }

    calculateFee(): number {
        return Math.trunc(this.amount * CONFIG_DEFAULT.FEES.SEND);
    }
}
