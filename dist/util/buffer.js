"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BUFFER {
    constructor() {
        this.LENGTH = {
            BYTE: 1,
            UINT32: 4,
            INT64: 8,
            SALT: 32,
            PUBLIC_KEY: 64,
            SIGNATURE: 64,
        };
    }
    stringNullGenerator(count) {
        let str = '';
        for (let i = 0; i < count; i++) {
            str += '0';
        }
        return str;
    }
    writeInt8(buff, int8, offset) {
        buff.writeInt8(int8, offset);
        return offset + this.LENGTH.BYTE;
    }
    writeInt32LE(buff, int32, offset) {
        buff.writeInt32LE(int32, offset);
        return offset + this.LENGTH.UINT32;
    }
    writeUInt64LE(buff, bigint, offset) {
        const MAX = 64;
        let bin = bigint.toString(2);
        bin = this.stringNullGenerator(MAX - bin.length) + bin;
        buff.writeUInt32LE(parseInt(bin.slice(0, 32), 2), offset);
        offset += 4;
        buff.writeUInt32LE(parseInt(bin.slice(32, 64), 2), offset);
        return offset + 4;
    }
    writeNotNull(buff, val, offset, len) {
        if (val) {
            buff.write(val, offset, len);
        }
        return offset + len;
    }
}
exports.default = new BUFFER();
