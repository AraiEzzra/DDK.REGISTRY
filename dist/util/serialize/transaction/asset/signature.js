"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const signature_1 = require("../../../../model/common/transaction/asset/signature");
class AssetSignatureSerializer {
    serialize(asset) {
        return {
            publicKey: asset.publicKey,
        };
    }
    deserialize(rawAsset) {
        return new signature_1.AssetSignature({
            publicKey: rawAsset.publicKey,
        });
    }
}
exports.assetSignatureSerializer = new AssetSignatureSerializer();
