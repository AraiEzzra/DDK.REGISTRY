import { Asset } from '.';

export class AssetSendStake extends Asset {
    recipientAddress: string;

    constructor(data: AssetSendStake) {
        super();

        this.recipientAddress = data.recipientAddress;
    }
}
