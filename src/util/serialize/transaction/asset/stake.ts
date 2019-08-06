import { IAssetSerializer } from '..';
import { AssetStake } from '../../../../model/common/transaction/asset/stake';
import { RawAsset } from '../../../../model/common/type';

class AssetStakeSerializer implements IAssetSerializer<AssetStake> {
    serialize(asset: AssetStake): RawAsset {
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

    deserialize(rawAsset: RawAsset): AssetStake {
        return new AssetStake({
            amount: rawAsset.amount,
            startTime: rawAsset.startTime,
            startVoteCount: rawAsset.startVoteCount,
            airdropReward: {
                sponsors: new Map(rawAsset.airdropReward.sponsors
                    .map((elem: [string, number]) => [BigInt(elem[0]), elem[1]])),
            },
        });
    }
}

export const assetStakeSerializer = new AssetStakeSerializer();
