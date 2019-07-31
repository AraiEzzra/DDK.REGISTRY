"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const z_schema_1 = __importDefault(require("z-schema"));
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
    if (value < const_1.MIN_LIMIT || value > const_1.MAX_LIMIT) {
        return false;
    }
    return true;
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
z_schema_1.default.registerFormat('secret', (str) => {
    return /^(\w+\s){11}\w+$/.test(str);
});
z_schema_1.default.registerFormat('vote', (str) => {
    return new RegExp(`^[${type_1.VoteType.VOTE}${type_1.VoteType.DOWN_VOTE}]`, 'g').test(str) && isPublicKey(str.substr(1));
});
exports.default = z_schema_1.default;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdXRpbC92YWxpZGF0ZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHdEQUFpQztBQUVqQyxrREFBc0U7QUFDdEUsdUNBQStEO0FBRS9ELE1BQU0sV0FBVyxHQUFHLENBQUMsR0FBYyxFQUFFLEVBQUU7SUFDbkMsSUFBSTtRQUNBLE1BQU0sU0FBUyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRTFDLE9BQU8sU0FBUyxDQUFDLE1BQU0sS0FBSyxhQUFNLENBQUMsVUFBVSxDQUFDO0tBQ2pEO0lBQUMsT0FBTyxDQUFDLEVBQUU7UUFDUixPQUFPLEtBQUssQ0FBQztLQUNoQjtBQUNMLENBQUMsQ0FBQztBQUVGLGtCQUFTLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFO0lBQ25DLElBQUk7UUFDQSxNQUFNLFNBQVMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUMxQyxPQUFPLFNBQVMsQ0FBQyxNQUFNLEtBQUssYUFBTSxDQUFDLEVBQUUsQ0FBQztLQUN6QztJQUFDLE9BQU8sQ0FBQyxFQUFFO1FBQ1IsT0FBTyxLQUFLLENBQUM7S0FDaEI7QUFDTCxDQUFDLENBQUMsQ0FBQztBQUVILGtCQUFTLENBQUMsY0FBYyxDQUFDLFNBQVMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFO0lBQ3hDLElBQUksR0FBRyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7UUFDbEIsT0FBTyxJQUFJLENBQUM7S0FDZjtJQUVELE9BQU8sWUFBWSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNsQyxDQUFDLENBQUMsQ0FBQztBQUVILGtCQUFTLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxDQUFDLEtBQXNCLEVBQVcsRUFBRTtJ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