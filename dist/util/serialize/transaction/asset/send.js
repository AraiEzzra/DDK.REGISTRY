"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const send_1 = require("../../../../model/common/transaction/asset/send");
class AssetSendSerializer {
    serialize(asset) {
        return {
            recipientAddress: asset.recipientAddress.toString(),
            amount: asset.amount,
        };
    }
    deserialize(rawAsset) {
        return new send_1.AssetSend({
            recipientAddress: BigInt(rawAsset.recipientAddress),
            amount: rawAsset.amount,
        });
    }
}
exports.assetSendSerializer = new AssetSendSerializer();
