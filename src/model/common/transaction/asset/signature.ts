import { Asset } from '.';
import { PublicKey } from '../../type';
import { clone } from '../../../../util/clone';
import { FEES } from '../../../../const';

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

    calculateFee(): number {
        return FEES.SIGNATURE;
    }
}
