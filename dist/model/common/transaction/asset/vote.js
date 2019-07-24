"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
const clone_1 = require("../../../../util/clone");
const buffer_1 = __importDefault(require("../../../../util/buffer"));
const const_1 = require("../../../../const");
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
        const sponsorsBuffer = Buffer.alloc((buffer_1.default.LENGTH.INT64 + buffer_1.default.LENGTH.INT64) * const_1.MAX_REFERRAL_COUNT);
        offset = 0;
        for (const [sponsorAddress, reward] of this.airdropReward.sponsors) {
            offset = buffer_1.default.writeUInt64LE(sponsorsBuffer, sponsorAddress, offset);
            offset = buffer_1.default.writeUInt64LE(sponsorsBuffer, reward, offset);
        }
        const voteBuffer = Buffer.from(this.votes.join(''), 'utf8');
        return Buffer.concat([buff, sponsorsBuffer, voteBuffer]);
    }
    calculateFee(sender) {
        return Math.ceil(sender.stakes.reduce((sum, stake) => sum += (stake.isActive ? stake.amount : 0), 0) * const_1.FEES.VOTE);
    }
}
exports.AssetVote = AssetVote;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidm90ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9tb2RlbC9jb21tb24vdHJhbnNhY3Rpb24vYXNzZXQvdm90ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHdCQUEwQjtBQUUxQixrREFBK0M7QUFDL0MscUVBQTZDO0FBRzdDLDZDQUE2RDtBQVU3RCxNQUFhLFNBQVUsU0FBUSxRQUFLO0lBT2hDLFlBQVksSUFBcUI7UUFDN0IsS0FBSyxFQUFFLENBQUM7UUFFUixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDeEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUMxQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDNUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzVDLENBQUM7SUFFRCxPQUFPO1FBQ0gsT0FBTyxJQUFJLFNBQVMsQ0FBQyxhQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRUQsUUFBUTtRQUNKLElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQztRQUNmLE1BQU0sSUFBSSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQ3JCLGdCQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxTQUFTO1lBQy9CLGdCQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBRyxVQUFVO1NBQ25DLENBQUM7UUFFRixNQUFNLEdBQUcsZ0JBQU0sQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDekQsTUFBTSxHQUFHLGdCQUFNLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBRTFELE1BQU0sY0FBYyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQy9CLENBQUMsZ0JBQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLGdCQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLDBCQUFrQixDQUNuRSxDQUFDO1FBRUYsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUNYLEtBQUssTUFBTSxDQUFDLGNBQWMsRUFBRSxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRTtZQUNoRSxNQUFNLEdBQUcsZ0JBQU0sQ0FBQyxhQUFhLENBQUMsY0FBYyxFQUFFLGNBQWMsRUFBRSxNQUFNLENBQUMsQ0FBQztZQUN0RSxNQUFNLEdBQUcsZ0JBQU0sQ0FBQyxhQUFhLENBQUMsY0FBYyxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztTQUNqRTtRQUVELE1BQU0sVUFBVSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDNUQsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxFQUFFLGNBQWMsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFFRCxZQUFZLENBQUMsTUFBZTtRQUN4QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQ2pDLENBQUMsR0FBVyxFQUFFLEtBQWtCLEVBQUUsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUMvRSxDQUFDLENBQ0osR0FBRyxZQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkIsQ0FBQztDQUNKO0FBbkRELDhCQW1EQyJ9