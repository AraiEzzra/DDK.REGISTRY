"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
const clone_1 = require("../../../../util/clone");
const const_1 = require("../../../../const");
class AssetDelegate extends _1.Asset {
    constructor(data) {
        super();
        this.username = data.username.toLowerCase().trim();
    }
    getCopy() {
        return new AssetDelegate(clone_1.clone(this));
    }
    getBytes() {
        return Buffer.from(this.username, 'utf8');
    }
    calculateFee() {
        return const_1.FEES.DELEGATE;
    }
}
exports.AssetDelegate = AssetDelegate;
