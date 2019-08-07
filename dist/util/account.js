"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = __importDefault(require("crypto"));
const ADDRESS_LENGTH = 8;
const HEXADECIMAL = 16;
const getBodyAddress = (buf) => {
    const hex = [];
    for (let i = 0; i < buf.length; i++) {
        const c = (buf[i] < HEXADECIMAL ? '0' : '') + buf[i].toString(HEXADECIMAL);
        hex.push(c);
    }
    return `0x${hex.join('')}`;
};
exports.getAddressByPublicKey = (publicKey) => {
    // @ts-ignore
    const publicKeyHash = crypto_1.default.createHash('sha256').update(publicKey, 'hex').digest();
    const temp = Buffer.alloc(ADDRESS_LENGTH);
    for (let i = 0; i < ADDRESS_LENGTH; i++) {
        temp[i] = publicKeyHash[ADDRESS_LENGTH - 1 - i];
    }
    return BigInt(getBodyAddress(temp).toString());
};
