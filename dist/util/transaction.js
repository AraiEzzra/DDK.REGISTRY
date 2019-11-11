"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const buffer_1 = __importDefault(require("../util/buffer"));
exports.TRANSACTION_SALT_LENGTH = 16;
exports.PUBLIC_KEY_LENGTH = 32;
exports.SIGNATURE_LENGTH = 64;
exports.ADDRESS_LENGTH = buffer_1.default.LENGTH.INT64;
exports.TRANSACTION_BUFFER_SIZE = buffer_1.default.LENGTH.BYTE + // type
    buffer_1.default.LENGTH.UINT32 + // createdAt
    exports.TRANSACTION_SALT_LENGTH +
    exports.PUBLIC_KEY_LENGTH;
