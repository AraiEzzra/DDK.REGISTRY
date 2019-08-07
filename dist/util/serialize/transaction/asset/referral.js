"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const referral_1 = require("../../../../model/common/transaction/asset/referral");
class AssetReferralSerializer {
    serialize(asset) {
        return {
            referral: asset.referral.toString(),
        };
    }
    deserialize(rawAsset) {
        return new referral_1.AssetReferral({
            referral: BigInt(rawAsset.referral),
        });
    }
}
exports.assetReferralSerializer = new AssetReferralSerializer();
