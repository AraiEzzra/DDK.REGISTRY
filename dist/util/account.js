"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = __importDefault(require("crypto"));
const const_1 = require("../const");
const buffer_1 = require("./buffer");
const address_1 = require("../model/common/address");
exports.getAddressByPublicKey = (publicKey) => {
    // @ts-ignore
    const publicKeyHash = crypto_1.default.createHash('sha256').update(publicKey, 'hex').digest();
    const temp = Buffer.allocUnsafe(const_1.ADDRESS_BYTES_LENGTH);
    for (let i = 0; i < const_1.ADDRESS_BYTES_LENGTH; i++) {
        temp[i] = publicKeyHash[const_1.ADDRESS_BYTES_LENGTH - 1 - i];
    }
    return new address_1.Address(buffer_1.bufferToHex(temp).toString());
};
