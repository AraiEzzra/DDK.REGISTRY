"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
const const_1 = require("../../../../const");
const clone_1 = require("../../../../util/clone");
const buffer_1 = __importDefault(require("../../../../util/buffer"));
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
        const buff = Buffer.alloc(buffer_1.default.LENGTH.INT64 + // recipientAddress
            buffer_1.default.LENGTH.INT64 // amount
        );
        let offset = buffer_1.default.writeUInt64LE(buff, this.recipientAddress, 0);
        buffer_1.default.writeUInt64LE(buff, this.amount, offset);
        return buff;
    }
    calculateFee() {
        return this.amount * const_1.FEES.SEND;
    }
}
exports.AssetSend = AssetSend;
