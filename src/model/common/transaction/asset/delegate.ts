import { Asset } from '.';
import { clone } from '../../../../util/clone';
import { CONFIG_DEFAULT } from '../../../../config';

export type AssetDelegateSchema = {
    username: string;
};

export class AssetDelegate extends Asset {
    username: string;

    constructor(data: AssetDelegateSchema) {
        super();

        this.username = data.username.toLowerCase().trim();
    }

    getCopy(): AssetDelegate {
        return new AssetDelegate(clone(this));
    }

    getBytes(): Buffer {
        return Buffer.from(this.username, 'utf8');
    }

    calculateFee(): number {
        return CONFIG_DEFAULT.FEES.DELEGATE;
    }
}
