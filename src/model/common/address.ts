import { addressSerializer } from '../../util/serialize/address';

export class Address {
    readonly value: BigInt;

    constructor(address: string) {
        this.value = addressSerializer.deserialize(address);
    }

    toString(): string {
        return addressSerializer.serialize(this.value);
    }
}
