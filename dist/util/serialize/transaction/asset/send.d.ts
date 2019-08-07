import { IAssetSerializer } from '..';
import { AssetSend } from '../../../../model/common/transaction/asset/send';
import { RawAsset } from '../../../../model/common/type';
declare class AssetSendSerializer implements IAssetSerializer<AssetSend> {
    serialize(asset: AssetSend): RawAsset;
    deserialize(rawAsset: RawAsset): AssetSend;
}
export declare const assetSendSerializer: AssetSendSerializer;
export {};
