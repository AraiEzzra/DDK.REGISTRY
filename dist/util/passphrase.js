"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bitcore_mnemonic_1 = __importDefault(require("bitcore-mnemonic"));
exports.generatePassphrase = () => {
    return new bitcore_mnemonic_1.default(bitcore_mnemonic_1.default.Words.ENGLISH).toString();
};
