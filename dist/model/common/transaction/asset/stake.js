"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
const clone_1 = require("../../../../util/clone");
const buffer_1 = __importDefault(require("../../../../util/buffer"));
const const_1 = require("../../../../const");
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
        return this.amount * const_1.FEES.STAKE;
    }
}
exports.AssetStake = AssetStake;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Rha2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbW9kZWwvY29tbW9uL3RyYW5zYWN0aW9uL2Fzc2V0L3N0YWtlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsd0JBQTBCO0FBRTFCLGtEQUErQztBQUMvQyxxRUFBNkM7QUFDN0MsNkNBQXlDO0FBU3pDLE1BQWEsVUFBVyxTQUFRLFFBQUs7SUFNakMsWUFBWSxJQUFzQjtRQUM5QixLQUFLLEVBQUUsQ0FBQztRQUVSLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUMxQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDaEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsY0FBYyxJQUFJLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDNUMsQ0FBQztJQUVELE9BQU87UUFDSCxPQUFPLElBQUksVUFBVSxDQUFDLGFBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFRCxRQUFRO1FBQ0osSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsTUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FDckIsZ0JBQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFJLFNBQVM7WUFDaEMsZ0JBQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLFlBQVk7WUFDbkMsZ0JBQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFLLGlCQUFpQjtTQUMzQyxDQUFDO1FBQ0YsTUFBTSxHQUFHLGdCQUFNLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUMxQyxNQUFNLElBQUksZ0JBQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO1FBQy9CLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUU1QyxNQUFNLGNBQWMsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUMvQixnQkFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsd0JBQXdCO1lBQzlDLGdCQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBRyx1QkFBdUI7U0FDaEQsQ0FBQztRQUNGLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDWCxJQUFJLElBQUksQ0FBQyxhQUFhLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLENBQUMsRUFBRTtZQUM1RCxLQUFLLE1BQU0sQ0FBQyxjQUFjLEVBQUUsTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUU7Z0JBQ2hFLE1BQU0sR0FBRyxnQkFBTSxDQUFDLGFBQWEsQ0FBQyxjQUFjLEVBQUUsY0FBYyxFQUFFLE1BQU0sQ0FBQyxDQUFDO2dCQUN0RSxnQkFBTSxDQUFDLGFBQWEsQ0FBQyxjQUFjLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO2FBQ3hEO1NBQ0o7UUFFRCxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLEVBQUUsY0FBYyxDQUFDLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRUQsWUFBWTtRQUNSLE9BQU8sSUFBSSxDQUFDLE1BQU0sR0FBRyxZQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BDLENBQUM7Q0FDSjtBQWpERCxnQ0FpREMifQ==