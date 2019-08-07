import { IAssetSerializer } from '..';
import { AssetVote } from '../../../../model/common/transaction/asset/vote';
import { RawAsset } from '../../../../model/common/type';
declare class AssetVoteSerializer implements IAssetSerializer<AssetVote> {
    serialize(asset: AssetVote): RawAsset;
    deserialize(rawAsset: RawAsset): AssetVote;
}
export declare const assetVoteSerializer: AssetVoteSerializer;
export {};
