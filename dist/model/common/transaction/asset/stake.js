"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
const clone_1 = require("../../../../util/clone");
const buffer_1 = __importDefault(require("../../../../util/buffer"));
const config_1 = require("../../../../config");
const BUFFER_SIZE = buffer_1.default.LENGTH.INT64 + // amount
    buffer_1.default.LENGTH.UINT32 + // startTime
    buffer_1.default.LENGTH.BYTE; // startVoteCount
const REWARD_BUFFER_SIZE = buffer_1.default.LENGTH.INT64 + // airdropReward.address
    buffer_1.default.LENGTH.INT64; // airdropReward.amount
class AssetStake extends _1.Asset {
    constructor(data) {
        super();
        this.amount = data.amount;
        this.startTime = data.startTime;
        this.startVoteCount = data.startVoteCount || 0;
        this.airdropReward = data.airdropReward;
    }
    getCopy() {
        return new AssetStake(clone_1.clone(this));
    }
    getBytes() {
        const buff = Buffer.alloc(BUFFER_SIZE);
        let offset = 0;
        offset = buffer_1.default.writeUInt64LE(buff, this.amount, offset);
        buff.writeInt32LE(this.startTime, offset);
        offset += buffer_1.default.LENGTH.UINT32;
        buff.writeInt8(this.startVoteCount, offset);
        const referralBuffer = Buffer.alloc(REWARD_BUFFER_SIZE);
        offset = 0;
        if (this.airdropReward && this.airdropReward.sponsors.size > 0) {
            for (const [sponsorAddress, reward] of this.airdropReward.sponsors) {
                offset = buffer_1.default.writeUInt64LE(referralBuffer, sponsorAddress, offset);
                buffer_1.default.writeUInt64LE(referralBuffer, reward, offset);
            }
        }
        return Buffer.concat([buff, referralBuffer]);
    }
    getBufferSize() {
        let size = BUFFER_SIZE;
        if (this.airdropReward && this.airdropReward.sponsors.size > 0) {
            size += REWARD_BUFFER_SIZE;
        }
        return size;
    }
    writeBytes(buffer, offset) {
        offset = buffer_1.default.writeUInt64LE(buffer, this.amount, offset);
        offset = buffer.writeInt32LE(this.startTime, offset);
        offset = buffer.writeInt8(this.startVoteCount, offset);
        if (this.airdropReward && this.airdropReward.sponsors.size > 0) {
            for (const [sponsorAddress, reward] of this.airdropReward.sponsors) {
                offset = buffer_1.default.writeUInt64LE(buffer, sponsorAddress, offset);
                offset = buffer_1.default.writeUInt64LE(buffer, reward, offset);
            }
        }
        else {
            offset = buffer_1.default.writeUInt64LE(buffer, 0, offset);
            offset = buffer_1.default.writeUInt64LE(buffer, 0, offset);
        }
        return offset;
    }
    calculateFee() {
        return this.amount * config_1.CONFIG_DEFAULT.FEES.STAKE;
    }
}
exports.AssetStake = AssetStake;
