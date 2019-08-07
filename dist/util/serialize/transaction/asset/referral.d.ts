import { IAssetSerializer } from '..';
import { AssetReferral } from '../../../../model/common/transaction/asset/referral';
import { RawAsset } from '../../../../model/common/type';
declare class AssetReferralSerializer implements IAssetSerializer<AssetReferral> {
    serialize(asset: AssetReferral): RawAsset;
    deserialize(rawAsset: RawAsset): AssetReferral;
}
export declare const assetReferralSerializer: AssetReferralSerializer;
export {};
