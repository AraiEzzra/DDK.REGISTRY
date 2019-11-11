"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const stake_1 = require("../../../../model/common/transaction/asset/stake");
const address_1 = require("../../../../model/common/address");
class AssetStakeSerializer {
    serialize(asset) {
        return {
            amount: asset.amount,
            startTime: asset.startTime,
            startVoteCount: asset.startVoteCount,
            airdropReward: {
                sponsors: Array.from(asset.airdropReward.sponsors)
                    .map(elem => [elem[0].toString(), elem[1]]),
            },
        };
    }
    deserialize(rawAsset) {
        return new stake_1.AssetStake({
            amount: rawAsset.amount,
            startTime: rawAsset.startTime,
            startVoteCount: rawAsset.startVoteCount,
            airdropReward: {
                sponsors: new Map(rawAsset.airdropReward.sponsors
                    .map((elem) => [new address_1.Address(elem[0]), elem[1]])),
            },
        });
    }
}
exports.assetStakeSerializer = new AssetStakeSerializer();
