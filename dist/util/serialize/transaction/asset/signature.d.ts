import { AssetSignature } from '../../../../model/common/transaction/asset/signature';
import { RawAsset } from '../../../../model/common/type';
import { ISerializer } from '../..';
declare class AssetSignatureSerializer implements ISerializer<RawAsset, AssetSignature> {
    serialize(asset: AssetSignature): RawAsset;
    deserialize(rawAsset: RawAsset): AssetSignature;
}
export declare const assetSignatureSerializer: AssetSignatureSerializer;
export {};
