import { Address } from '../../type';
import { Asset } from '.';
import { FEES } from '../../../../const';
import { clone } from '../../../../util/clone';
import BUFFER from '../../../../util/buffer';

export type AssetSendSchema = {
    recipientAddress: Address;
    amount: number;
};

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
        const buff = Buffer.alloc(
            BUFFER.LENGTH.INT64 + // recipientAddress
            BUFFER.LENGTH.INT64  // amount
        );
        let offset = BUFFER.writeUInt64LE(buff, this.recipientAddress, 0);
        BUFFER.writeUInt64LE(buff, this.amount, offset);
        return buff;
    }

    calculateFee(): number {
        return this.amount * FEES.SEND;
    }
}
