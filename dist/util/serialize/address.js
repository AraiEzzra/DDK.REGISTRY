"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const const_1 = require("../../const");
const buffer_1 = __importStar(require("../buffer"));
const unsafeConst_1 = require("../../unsafeConst");
class AddressSerializer {
    constructor(maxAddress, maxAddressBytesSize) {
        this.maxAddress = maxAddress;
        this.maxAddressBytesSize = maxAddressBytesSize;
    }
    serialize(data) {
        return data.toString();
    }
    deserialize(raw) {
        const tmp = BigInt(raw);
        if (tmp <= this.maxAddress) {
            return tmp;
        }
        const buffer = Buffer.allocUnsafe(this.maxAddressBytesSize);
        buffer_1.default.writeUInt64LE(buffer, tmp);
        return BigInt(buffer_1.bufferToHex(buffer));
    }
}
exports.AddressSerializer = AddressSerializer;
exports.addressSerializer = new AddressSerializer(unsafeConst_1.MAX_ADDRESS, const_1.ADDRESS_BYTES_LENGTH);
