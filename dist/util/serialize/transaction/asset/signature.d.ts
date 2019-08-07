import { IAssetSerializer } from '..';
import { AssetSignature } from '../../../../model/common/transaction/asset/signature';
import { RawAsset } from '../../../../model/common/type';
declare class AssetSignatureSerializer implements IAssetSerializer<AssetSignature> {
    serialize(asset: AssetSignature): RawAsset;
    deserialize(rawAsset: RawAsset): AssetSignature;
}
export declare const assetSignatureSerializer: AssetSignatureSerializer;
export {};
