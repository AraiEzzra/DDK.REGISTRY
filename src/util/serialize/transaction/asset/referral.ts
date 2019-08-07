import { IAssetSerializer } from '..';
import { AssetReferral } from '../../../../model/common/transaction/asset/referral';
import { RawAsset } from '../../../../model/common/type';

class AssetReferralSerializer implements IAssetSerializer<AssetReferral> {
    serialize(asset: AssetReferral): RawAsset {
        return {
            referral: asset.referral.toString(),
        };
    }

    deserialize(rawAsset: RawAsset): AssetReferral {
        return new AssetReferral({
            referral: BigInt(rawAsset.referral),
        });
    }
}

export const assetReferralSerializer = new AssetReferralSerializer();
