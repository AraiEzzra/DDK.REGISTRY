import { AssetReferral } from '../../../../model/common/transaction/asset/referral';
import { RawAsset } from '../../../../model/common/type';
import { Address } from '../../../../model/common/address';
import { ISerializer } from '../..';

class AssetReferralSerializer implements ISerializer<RawAsset, AssetReferral> {
    serialize(asset: AssetReferral): RawAsset {
        return {
            referral: asset.referral.toString(),
        };
    }

    deserialize(rawAsset: RawAsset): AssetReferral {
        return new AssetReferral({
            referral: new Address(rawAsset.referral),
        });
    }
}

export const assetReferralSerializer = new AssetReferralSerializer();
