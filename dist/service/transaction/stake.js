"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const reward_1 = require("../../util/reward");
const type_1 = require("../../model/common/transaction/type");
const stake_1 = require("../../model/common/transaction/asset/stake");
exports.createAssetStake = (data, sender, availableAirdropBalance) => {
    const airdropReward = reward_1.calculateAirdropReward(sender, data.amount, type_1.TransactionType.STAKE, availableAirdropBalance);
    return new stake_1.AssetStake({
        airdropReward,
        amount: data.amount,
        startTime: data.createdAt,
        startVoteCount: data.startVoteCount || 0,
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Rha2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvc2VydmljZS90cmFuc2FjdGlvbi9zdGFrZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLDhDQUEyRDtBQUUzRCw4REFBc0U7QUFDdEUsc0VBQXdFO0FBUTNELFFBQUEsZ0JBQWdCLEdBQUcsQ0FDNUIsSUFBZSxFQUNmLE1BQWUsRUFDZix1QkFBK0IsRUFDckIsRUFBRTtJQUNaLE1BQU0sYUFBYSxHQUFHLCtCQUFzQixDQUN4QyxNQUFNLEVBQ04sSUFBSSxDQUFDLE1BQU0sRUFDWCxzQkFBZSxDQUFDLEtBQUssRUFDckIsdUJBQXVCLENBQzFCLENBQUM7SUFFRixPQUFPLElBQUksa0JBQVUsQ0FBQztRQUNsQixhQUFhO1FBQ2IsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1FBQ25CLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztRQUN6QixjQUFjLEVBQUUsSUFBSSxDQUFDLGNBQWMsSUFBSSxDQUFDO0tBQzNDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQyJ9