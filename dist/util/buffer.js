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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVmZmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3V0aWwvYnVmZmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsTUFBTSxNQUFNO0lBQVo7UUFDb0IsV0FBTSxHQUFHO1lBQ3JCLElBQUksRUFBRSxDQUFDO1lBQ1AsTUFBTSxFQUFFLENBQUM7WUFDVCxLQUFLLEVBQUUsQ0FBQztZQUNSLElBQUksRUFBRSxFQUFFO1lBQ1IsVUFBVSxFQUFFLEVBQUU7WUFDZCxTQUFTLEVBQUUsRUFBRTtTQUNoQixDQUFDO0lBcUNOLENBQUM7SUFuQ1UsbUJBQW1CLENBQUMsS0FBYTtRQUNwQyxJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUM7UUFDYixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzVCLEdBQUcsSUFBSSxHQUFHLENBQUM7U0FDZDtRQUNELE9BQU8sR0FBRyxDQUFDO0lBQ2YsQ0FBQztJQUVNLFNBQVMsQ0FBQyxJQUFZLEVBQUUsSUFBWSxFQUFFLE1BQWM7UUFDdkQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDN0IsT0FBTyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDckMsQ0FBQztJQUVNLFlBQVksQ0FBQyxJQUFZLEVBQUUsS0FBYSxFQUFFLE1BQWM7UUFDM0QsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDakMsT0FBTyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7SUFDdkMsQ0FBQztJQUVNLGFBQWEsQ0FBQyxJQUFZLEVBQUUsTUFBdUIsRUFBRSxNQUFjO1FBQ3RFLE1BQU0sR0FBRyxHQUFHLEVBQUUsQ0FBQztRQUVmLElBQUksR0FBRyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDN0IsR0FBRyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUN2RCxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUMxRCxNQUFNLElBQUksQ0FBQyxDQUFDO1FBQ1osSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDM0QsT0FBTyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQ3RCLENBQUM7SUFFTSxZQUFZLENBQUMsSUFBWSxFQUFFLEdBQVcsRUFBRSxNQUFjLEVBQUUsR0FBVztRQUN0RSxJQUFJLEdBQUcsRUFBRTtZQUNMLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQztTQUNoQztRQUNELE9BQU8sTUFBTSxHQUFHLEdBQUcsQ0FBQztJQUN4QixDQUFDO0NBQ0o7QUFFRCxrQkFBZSxJQUFJLE1BQU0sRUFBRSxDQUFDIn0=