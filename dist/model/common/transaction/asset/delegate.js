"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
const clone_1 = require("../../../../util/clone");
const config_1 = require("../../../../config");
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
        return config_1.CONFIG_DEFAULT.FEES.DELEGATE;
    }
}
exports.AssetDelegate = AssetDelegate;
