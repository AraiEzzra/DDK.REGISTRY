"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const address_1 = require("../../util/serialize/address");
class Address {
    constructor(address) {
        this.value = address_1.addressSerializer.deserialize(address);
    }
    toString() {
        return address_1.addressSerializer.serialize(this.value);
    }
}
exports.Address = Address;
