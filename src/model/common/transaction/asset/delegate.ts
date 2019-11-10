import { Asset } from '.';
import { clone } from '../../../../util/clone';
import { CONFIG_DEFAULT } from '../../../../config';
import { calculateUtf8BytesLength } from '../../../../util/string';

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

    getBufferSize(): number {
        return calculateUtf8BytesLength(this.username);
    }

    writeBytes(buffer: Buffer, offset: number): number {
        return buffer.write(this.username, offset, 'utf8') + offset;
    }

    calculateFee(): number {
        return CONFIG_DEFAULT.FEES.DELEGATE;
    }
}
