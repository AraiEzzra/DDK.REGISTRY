import { IAssetSerializer } from '..';
import { AssetDelegate } from '../../../../model/common/transaction/asset/delegate';
import { RawAsset } from '../../../../model/common/type';
declare class AssetDelegateSerializer implements IAssetSerializer<AssetDelegate> {
    serialize(asset: AssetDelegate): RawAsset;
    deserialize(rawAsset: RawAsset): AssetDelegate;
}
export declare const assetDelegateSerializer: AssetDelegateSerializer;
export {};
