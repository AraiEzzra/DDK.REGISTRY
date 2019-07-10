import { Asset } from '.';
import { PublicKey } from '../../type';

export class AssetSignature extends Asset {
    publicKey: PublicKey;

    constructor(data: AssetSignature) {
        super();

        this.publicKey = data.publicKey;
    }
}
