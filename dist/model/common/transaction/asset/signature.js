"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
const clone_1 = require("../../../../util/clone");
const config_1 = require("../../../../config");
const transaction_1 = require("../../../../util/transaction");
class AssetSignature extends _1.Asset {
    constructor(data) {
        super();
        this.publicKey = data.publicKey;
    }
    getCopy() {
        return new AssetSignature(clone_1.clone(this));
    }
    getBytes() {
        return Buffer.from(this.publicKey, 'hex');
    }
    getBufferSize() {
        return transaction_1.PUBLIC_KEY_LENGTH;
    }
    writeBytes(buffer, offset) {
        return buffer.write(this.publicKey, offset, 'hex') + offset;
    }
    calculateFee() {
        return config_1.CONFIG_DEFAULT.FEES.SIGNATURE;
    }
}
exports.AssetSignature = AssetSignature;
