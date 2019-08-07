"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
const clone_1 = require("../../../../util/clone");
const buffer_1 = __importDefault(require("../../../../util/buffer"));
class AssetReferral extends _1.Asset {
    constructor(data) {
        super();
        this.referral = data.referral;
    }
    getCopy() {
        return new AssetReferral(clone_1.clone(this));
    }
    getBytes() {
        const buff = Buffer.alloc(buffer_1.default.LENGTH.INT64);
        buffer_1.default.writeUInt64LE(buff, this.referral, 0);
        return buff;
    }
    calculateFee() {
        return 0;
    }
}
exports.AssetReferral = AssetReferral;
