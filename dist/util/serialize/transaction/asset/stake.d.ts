import { IAssetSerializer } from '..';
import { AssetStake } from '../../../../model/common/transaction/asset/stake';
import { RawAsset } from '../../../../model/common/type';
declare class AssetStakeSerializer implements IAssetSerializer<AssetStake> {
    serialize(asset: AssetStake): RawAsset;
    deserialize(rawAsset: RawAsset): AssetStake;
}
export declare const assetStakeSerializer: AssetStakeSerializer;
export {};
