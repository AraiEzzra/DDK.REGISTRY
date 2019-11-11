"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
const clone_1 = require("../../../../util/clone");
const buffer_1 = __importDefault(require("../../../../util/buffer"));
const config_1 = require("../../../../config");
const bufferSize = buffer_1.default.LENGTH.INT64 + // recipientAddress
    buffer_1.default.LENGTH.INT64; // amount
class AssetSend extends _1.Asset {
    constructor(data) {
        super();
        this.recipientAddress = data.recipientAddress;
        this.amount = data.amount;
    }
    getCopy() {
        return new AssetSend(clone_1.clone(this));
    }
    getBytes() {
        const buff = Buffer.allocUnsafe(bufferSize);
        let offset = buffer_1.default.writeUInt64LE(buff, this.recipientAddress.value, 0);
        buffer_1.default.writeUInt64LE(buff, this.amount, offset);
        return buff;
    }
    getBufferSize() {
        return bufferSize;
    }
    writeBytes(buffer, offset) {
        offset = buffer_1.default.writeUInt64LE(buffer, this.recipientAddress.value, offset);
        return buffer_1.default.writeUInt64LE(buffer, this.amount, offset);
    }
    calculateFee() {
        return Math.trunc(this.amount * config_1.CONFIG_DEFAULT.FEES.SEND);
    }
}
exports.AssetSend = AssetSend;
