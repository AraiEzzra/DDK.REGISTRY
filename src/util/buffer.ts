class BUFFER {
    public readonly LENGTH = {
        BYTE: 1,
        UINT32: 4,
        INT64: 8,
        SALT: 32,
        PUBLIC_KEY: 64,
        SIGNATURE: 64,
    };

    public stringNullGenerator(count: number): string {
        let str = '';
        for (let i = 0; i < count; i++) {
            str += '0';
        }
        return str;
    }

    public writeInt8(buff: Buffer, int8: number, offset: number): number {
        buff.writeInt8(int8, offset);
        return offset + this.LENGTH.BYTE;
    }

    public writeInt32LE(buff: Buffer, int32: number, offset: number): number {
        buff.writeInt32LE(int32, offset);
        return offset + this.LENGTH.UINT32;
    }

    public writeUInt64LE(buff: Buffer, bigint: number | BigInt, offset: number): number {
        const MAX = 64;

        let bin = bigint.toString(2);
        bin = this.stringNullGenerator(MAX - bin.length) + bin;
        buff.writeUInt32LE(parseInt(bin.slice(0, 32), 2), offset);
        offset += 4;
        buff.writeUInt32LE(parseInt(bin.slice(32, 64), 2), offset);
        return offset + 4;
    }

    public writeNotNull(buff: Buffer, val: string, offset: number, len: number): number {
        if (val) {
            buff.write(val, offset, len);
        }
        return offset + len;
    }
}

export default new BUFFER();
