"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vote_1 = require("../../../../model/common/transaction/asset/vote");
class AssetVoteSerializer {
    serialize(asset) {
        return {
            votes: asset.votes,
            reward: asset.reward,
            unstake: asset.unstake,
            type: asset.type,
            airdropReward: {
                sponsors: Array.from(asset.airdropReward.sponsors)
                    .map(elem => [elem[0].toString(), elem[1]]),
            },
        };
    }
    deserialize(rawAsset) {
        return new vote_1.AssetVote({
            votes: rawAsset.votes,
            reward: rawAsset.reward,
            unstake: rawAsset.unstake,
            type: rawAsset.type,
            airdropReward: {
                sponsors: new Map(rawAsset.airdropReward.sponsors
                    .map((elem) => [BigInt(elem[0]), elem[1]])),
            },
        });
    }
}
exports.assetVoteSerializer = new AssetVoteSerializer();
