import { AssetVote } from '../../../../model/common/transaction/asset/vote';
import { RawAsset } from '../../../../model/common/type';
import { ISerializer } from '../..';
declare class AssetVoteSerializer implements ISerializer<RawAsset, AssetVote> {
    serialize(asset: AssetVote): RawAsset;
    deserialize(rawAsset: RawAsset): AssetVote;
}
export declare const assetVoteSerializer: AssetVoteSerializer;
export {};
