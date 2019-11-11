import { AssetSend } from '../../../../model/common/transaction/asset/send';
import { RawAsset } from '../../../../model/common/type';
import { ISerializer } from '../..';
declare class AssetSendSerializer implements ISerializer<RawAsset, AssetSend> {
    serialize(asset: AssetSend): RawAsset;
    deserialize(rawAsset: RawAsset): AssetSend;
}
export declare const assetSendSerializer: AssetSendSerializer;
export {};
