"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const delegate_1 = require("../../../../model/common/transaction/asset/delegate");
class AssetDelegateSerializer {
    serialize(asset) {
        return {
            username: asset.username,
        };
    }
    deserialize(rawAsset) {
        return new delegate_1.AssetDelegate({
            username: rawAsset.username,
        });
    }
}
exports.assetDelegateSerializer = new AssetDelegateSerializer();
