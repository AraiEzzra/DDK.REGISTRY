"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
const clone_1 = require("../../../../util/clone");
const buffer_1 = __importDefault(require("../../../../util/buffer"));
const transaction_1 = require("../../../../util/transaction");
class AssetReferral extends _1.Asset {
    constructor(data) {
        super();
        this.referral = data.referral;
    }
    getCopy() {
        return new AssetReferral(clone_1.clone(this));
    }
    getBytes() {
        const buff = Buffer.alloc(transaction_1.ADDRESS_LENGTH);
        buffer_1.default.writeUInt64LE(buff, this.referral.value, 0);
        return buff;
    }
    getBufferSize() {
        return transaction_1.ADDRESS_LENGTH;
    }
    writeBytes(buffer, offset) {
        return buffer_1.default.writeUInt64LE(buffer, this.referral.value, offset);
    }
    calculateFee() {
        return 0;
    }
}
exports.AssetReferral = AssetReferral;
