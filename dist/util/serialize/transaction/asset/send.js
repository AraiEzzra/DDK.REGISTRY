"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const send_1 = require("../../../../model/common/transaction/asset/send");
const address_1 = require("../../../../model/common/address");
class AssetSendSerializer {
    serialize(asset) {
        return {
            recipientAddress: asset.recipientAddress.toString(),
            amount: asset.amount,
        };
    }
    deserialize(rawAsset) {
        return new send_1.AssetSend({
            recipientAddress: new address_1.Address(rawAsset.recipientAddress),
            amount: rawAsset.amount,
        });
    }
}
exports.assetSendSerializer = new AssetSendSerializer();
