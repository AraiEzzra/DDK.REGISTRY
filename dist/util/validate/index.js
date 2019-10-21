"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const z_schema_1 = __importDefault(require("z-schema"));
const bitcore_mnemonic_1 = __importDefault(require("bitcore-mnemonic"));
const type_1 = require("../../model/common/type");
const const_1 = require("../../const");
const isPublicKey = (str) => {
    try {
        const publicKey = Buffer.from(str, 'hex');
        return publicKey.length === type_1.LENGTH.PUBLIC_KEY;
    }
    catch (e) {
        return false;
    }
};
z_schema_1.default.registerFormat('id', (str) => {
    try {
        const publicKey = Buffer.from(str, 'hex');
        return publicKey.length === type_1.LENGTH.ID;
    }
    catch (e) {
        return false;
    }
});
z_schema_1.default.registerFormat('address', (str) => {
    if (str.length === 0) {
        return true;
    }
    return /^\d{8,21}$/.test(str);
});
z_schema_1.default.registerFormat('limit', (value) => {
    if (typeof value === 'string') {
        value = Number(value);
    }
    return value !== NaN;
});
z_schema_1.default.registerFormat('offset', (value) => {
    if (typeof value === 'string') {
        value = Number(value);
    }
    if (value < const_1.MIN_OFFSET) {
        return false;
    }
    return true;
});
z_schema_1.default.registerFormat('username', (str) => {
    return /^[a-z0-9!@$&_.]{1,20}$/ig.test(str);
});
z_schema_1.default.registerFormat('hex', (str) => {
    try {
        Buffer.from(str, 'hex');
    }
    catch (e) {
        return false;
    }
    return true;
});
z_schema_1.default.registerFormat('publicKey', isPublicKey);
z_schema_1.default.registerFormat('signature', (str) => {
    if (str.length === 0) {
        return true;
    }
    try {
        const signature = Buffer.from(str, 'hex');
        return signature.length === type_1.LENGTH.SIGNATURE;
    }
    catch (e) {
        return false;
    }
});
z_schema_1.default.registerFormat('version', (str) => {
    if (str.length === 0) {
        return true;
    }
    return /^([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3})([a-z]{1})?$/g.test(str);
});
z_schema_1.default.registerFormat('secret', (secret) => {
    return bitcore_mnemonic_1.default.isValid(secret);
});
z_schema_1.default.registerFormat('vote', (str) => {
    return new RegExp(`^[${type_1.VoteType.VOTE}${type_1.VoteType.DOWN_VOTE}]`, 'g').test(str) && isPublicKey(str.substr(1));
});
exports.default = z_schema_1.default;
