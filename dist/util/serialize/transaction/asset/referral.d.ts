import { AssetReferral } from '../../../../model/common/transaction/asset/referral';
import { RawAsset } from '../../../../model/common/type';
import { ISerializer } from '../..';
declare class AssetReferralSerializer implements ISerializer<RawAsset, AssetReferral> {
    serialize(asset: AssetReferral): RawAsset;
    deserialize(rawAsset: RawAsset): AssetReferral;
}
export declare const assetReferralSerializer: AssetReferralSerializer;
export {};
