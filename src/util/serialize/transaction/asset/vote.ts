import { AssetVote } from '../../../../model/common/transaction/asset/vote';
import { RawAsset } from '../../../../model/common/type';
import { ISerializer } from '../..';
import { Address } from '../../../../model/common/address';

class AssetVoteSerializer implements ISerializer<RawAsset, AssetVote> {
    serialize(asset: AssetVote): RawAsset {
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

    deserialize(rawAsset: RawAsset): AssetVote {
        return new AssetVote({
            votes: rawAsset.votes,
            reward: rawAsset.reward,
            unstake: rawAsset.unstake,
            type: rawAsset.type,
            airdropReward: {
                sponsors: new Map<Address, number>(rawAsset.airdropReward.sponsors
                    .map((elem: [string, number]) => [new Address(elem[0]), elem[1]])),
            },
        });
    }
}

export const assetVoteSerializer = new AssetVoteSerializer();
