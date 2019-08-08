"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
const clone_1 = require("../../../../util/clone");
const buffer_1 = __importDefault(require("../../../../util/buffer"));
const config_1 = require("../../../../config");
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
        let offset = 0;
        const buff = Buffer.alloc(buffer_1.default.LENGTH.INT64 + // amount
            buffer_1.default.LENGTH.UINT32 + // startTime
            buffer_1.default.LENGTH.BYTE // startVoteCount
        );
        offset = buffer_1.default.writeUInt64LE(buff, this.amount, offset);
        buff.writeInt32LE(this.startTime, offset);
        offset += buffer_1.default.LENGTH.UINT32;
        buff.writeInt8(this.startVoteCount, offset);
        const referralBuffer = Buffer.alloc(buffer_1.default.LENGTH.INT64 + // airdropReward.address
            buffer_1.default.LENGTH.INT64 // airdropReward.amount
        );
        offset = 0;
        if (this.airdropReward && this.airdropReward.sponsors.size > 0) {
            for (const [sponsorAddress, reward] of this.airdropReward.sponsors) {
                offset = buffer_1.default.writeUInt64LE(referralBuffer, sponsorAddress, offset);
                buffer_1.default.writeUInt64LE(referralBuffer, reward, offset);
            }
        }
        return Buffer.concat([buff, referralBuffer]);
    }
    calculateFee() {
        return this.amount * config_1.CONFIG_DEFAULT.FEES.STAKE;
    }
}
exports.AssetStake = AssetStake;
