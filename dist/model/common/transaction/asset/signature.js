"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
const clone_1 = require("../../../../util/clone");
const const_1 = require("../../../../const");
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
    calculateFee() {
        return const_1.FEES.SIGNATURE;
    }
}
exports.AssetSignature = AssetSignature;
