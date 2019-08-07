"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const buffer_1 = __importDefault(require("../util/buffer"));
exports.TRANSACTION_SALT_LENGTH = 16;
exports.TRANSACTION_BUFFER_SIZE = buffer_1.default.LENGTH.BYTE + // type
    buffer_1.default.LENGTH.UINT32; // createdAt
