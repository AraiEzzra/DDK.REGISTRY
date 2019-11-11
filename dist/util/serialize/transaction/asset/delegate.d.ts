import { AssetDelegate } from '../../../../model/common/transaction/asset/delegate';
import { RawAsset } from '../../../../model/common/type';
import { ISerializer } from '../..';
declare class AssetDelegateSerializer implements ISerializer<RawAsset, AssetDelegate> {
    serialize(asset: AssetDelegate): RawAsset;
    deserialize(rawAsset: RawAsset): AssetDelegate;
}
export declare const assetDelegateSerializer: AssetDelegateSerializer;
export {};
