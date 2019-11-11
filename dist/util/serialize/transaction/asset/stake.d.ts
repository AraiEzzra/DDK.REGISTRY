import { AssetStake } from '../../../../model/common/transaction/asset/stake';
import { RawAsset } from '../../../../model/common/type';
import { ISerializer } from '../..';
declare class AssetStakeSerializer implements ISerializer<RawAsset, AssetStake> {
    serialize(asset: AssetStake): RawAsset;
    deserialize(rawAsset: RawAsset): AssetStake;
}
export declare const assetStakeSerializer: AssetStakeSerializer;
export {};
