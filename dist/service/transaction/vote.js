"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vote_1 = require("../../model/common/transaction/asset/vote");
const reward_1 = require("../../util/reward");
const type_1 = require("../../model/common/type");
const type_2 = require("../../model/common/transaction/type");
exports.createAssetVote = (data, sender, lastBlockHeight, availableAirdropBalance) => {
    const { reward, unstake } = reward_1.calculateTotalRewardAndUnstake(data.createdAt, sender, data.type === type_1.VoteType.DOWN_VOTE, lastBlockHeight);
    const airdropReward = reward_1.calculateAirdropReward(sender, reward, type_2.TransactionType.VOTE, availableAirdropBalance);
    return new vote_1.AssetVote({
        airdropReward,
        reward,
        unstake,
        type: data.type,
        votes: data.votes,
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidm90ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zZXJ2aWNlL3RyYW5zYWN0aW9uL3ZvdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxvRUFBc0U7QUFDdEUsOENBQTJGO0FBQzNGLGtEQUE4RDtBQUM5RCw4REFBc0U7QUFRekQsUUFBQSxlQUFlLEdBQUcsQ0FDM0IsSUFBYyxFQUNkLE1BQWUsRUFDZixlQUF1QixFQUN2Qix1QkFBK0IsRUFDdEIsRUFBRTtJQUNYLE1BQU0sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLEdBQ3JCLHVDQUE4QixDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxJQUFJLEtBQUssZUFBUSxDQUFDLFNBQVMsRUFBRSxlQUFlLENBQUMsQ0FBQztJQUM5RyxNQUFNLGFBQWEsR0FBRywrQkFBc0IsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLHNCQUFlLENBQUMsSUFBSSxFQUFFLHVCQUF1QixDQUFDLENBQUM7SUFFNUcsT0FBTyxJQUFJLGdCQUFTLENBQUM7UUFDakIsYUFBYTtRQUNiLE1BQU07UUFDTixPQUFPO1FBQ1AsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1FBQ2YsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO0tBQ3BCLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQyJ9