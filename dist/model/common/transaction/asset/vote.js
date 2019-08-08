"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
const clone_1 = require("../../../../util/clone");
const buffer_1 = __importDefault(require("../../../../util/buffer"));
const config_1 = require("../../../../config");
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
        let offset = 0;
        const buff = Buffer.alloc(buffer_1.default.LENGTH.INT64 + // reward
            buffer_1.default.LENGTH.INT64 // unstake
        );
        offset = buffer_1.default.writeUInt64LE(buff, this.reward, offset);
        offset = buffer_1.default.writeUInt64LE(buff, this.unstake, offset);
        const sponsorsBuffer = Buffer.alloc((buffer_1.default.LENGTH.INT64 + buffer_1.default.LENGTH.INT64) * config_1.CONFIG_DEFAULT.MAX_REFERRAL_COUNT);
        offset = 0;
        for (const [sponsorAddress, reward] of this.airdropReward.sponsors) {
            offset = buffer_1.default.writeUInt64LE(sponsorsBuffer, sponsorAddress, offset);
            offset = buffer_1.default.writeUInt64LE(sponsorsBuffer, reward, offset);
        }
        const voteBuffer = Buffer.from(this.votes.join(''), 'utf8');
        return Buffer.concat([buff, sponsorsBuffer, voteBuffer]);
    }
    calculateFee(sender) {
        return Math.ceil(sender.stakes.reduce((sum, stake) => sum += (stake.isActive ? stake.amount : 0), 0) * config_1.CONFIG_DEFAULT.FEES.VOTE);
    }
}
exports.AssetVote = AssetVote;
