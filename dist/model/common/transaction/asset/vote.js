"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
const clone_1 = require("../../../../util/clone");
const buffer_1 = __importDefault(require("../../../../util/buffer"));
const config_1 = require("../../../../config");
const string_1 = require("../../../../util/string");
const BUFFER_SIZE = buffer_1.default.LENGTH.INT64 + // reward
    buffer_1.default.LENGTH.INT64; // unstake
const REWARD_BUFFER_SIZE = buffer_1.default.LENGTH.INT64 + // airdropReward.address
    buffer_1.default.LENGTH.INT64; // airdropReward.amount
class AssetVote extends _1.Asset {
    constructor(data) {
        super();
        this.votes = data.votes;
        this.type = data.type;
        this.reward = data.reward;
        this.unstake = data.unstake;
        this.airdropReward = data.airdropReward;
    }
    getCopy() {
        return new AssetVote(clone_1.clone(this));
    }
    getBytes() {
        const buff = Buffer.alloc(BUFFER_SIZE);
        let offset = 0;
        offset = buffer_1.default.writeUInt64LE(buff, this.reward, offset);
        offset = buffer_1.default.writeUInt64LE(buff, this.unstake, offset);
        const sponsorsBuffer = Buffer.alloc(REWARD_BUFFER_SIZE * config_1.CONFIG_DEFAULT.MAX_REFERRAL_COUNT);
        offset = 0;
        for (const [sponsorAddress, reward] of this.airdropReward.sponsors) {
            offset = buffer_1.default.writeUInt64LE(sponsorsBuffer, sponsorAddress, offset);
            offset = buffer_1.default.writeUInt64LE(sponsorsBuffer, reward, offset);
        }
        const voteBuffer = Buffer.from(this.votes.join(''), 'utf8');
        return Buffer.concat([buff, sponsorsBuffer, voteBuffer]);
    }
    getBufferSize() {
        let size = BUFFER_SIZE;
        if (this.airdropReward && this.airdropReward.sponsors.size > 0) {
            size += REWARD_BUFFER_SIZE * config_1.CONFIG_DEFAULT.MAX_REFERRAL_COUNT;
        }
        size += string_1.calculateUtf8BytesLength(this.votes.join(''));
        return size;
    }
    writeBytes(buffer, offset) {
        offset = buffer_1.default.writeUInt64LE(buffer, this.reward, offset);
        offset = buffer_1.default.writeUInt64LE(buffer, this.unstake, offset);
        for (const [sponsorAddress, reward] of this.airdropReward.sponsors) {
            offset = buffer_1.default.writeUInt64LE(buffer, sponsorAddress, offset);
            offset = buffer_1.default.writeUInt64LE(buffer, reward, offset);
        }
        if (this.airdropReward.sponsors.size < config_1.CONFIG_DEFAULT.MAX_REFERRAL_COUNT) {
            const diff = config_1.CONFIG_DEFAULT.MAX_REFERRAL_COUNT - this.airdropReward.sponsors.size;
            offset += diff * REWARD_BUFFER_SIZE;
        }
        offset += buffer.write(this.votes.join(''), offset, 'utf8');
        return offset;
    }
    calculateFee(sender) {
        return Math.ceil(sender.stakes.reduce((sum, stake) => sum += (stake.isActive ? stake.amount : 0), 0) * config_1.CONFIG_DEFAULT.FEES.VOTE);
    }
}
exports.AssetVote = AssetVote;
