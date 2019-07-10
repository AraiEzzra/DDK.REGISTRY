import { Address } from '../../type';
import { Asset } from '.';

export class AssetSend extends Asset {
    recipientAddress: Address;
    amount: number;

    constructor(data: AssetSend) {
        super();

        this.recipientAddress = data.recipientAddress;
        this.amount = data.amount;
    }
}
