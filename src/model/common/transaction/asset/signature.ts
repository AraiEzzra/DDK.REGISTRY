import { Asset } from '.';
import { PublicKey } from '../../type';
import { clone } from '../../../../util/clone';
import { CONFIG_DEFAULT } from '../../../../config';
import { PUBLIC_KEY_LENGTH } from '../../../../util/transaction';

export type AssetSignatureSchema = {
    publicKey: PublicKey;
};

export class AssetSignature extends Asset {
    publicKey: PublicKey;

    constructor(data: AssetSignatureSchema) {
        super();

        this.publicKey = data.publicKey;
    }

    getCopy(): AssetSignature {
        return new AssetSignature(clone(this));
    }

    getBytes(): Buffer {
        return Buffer.from(this.publicKey, 'hex');
    }

    getBufferSize(): number {
        return PUBLIC_KEY_LENGTH;
    }

    writeBytes(buffer: Buffer, offset: number): number {
        return buffer.write(this.publicKey, offset, 'hex') + offset;
    }

    calculateFee(): number {
        return CONFIG_DEFAULT.FEES.SIGNATURE;
    }
}
