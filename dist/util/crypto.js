"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = __importDefault(require("crypto"));
const ed_1 = require("./ed");
exports.createKeyPairBySecret = (secret) => {
    const hash = crypto_1.default.createHash('sha256').update(secret, 'utf8').digest();
    return ed_1.ed.makeKeyPair(hash);
};
