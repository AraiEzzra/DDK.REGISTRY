import { IAssetSerializer } from '..';
import { AssetDelegate } from '../../../../model/common/transaction/asset/delegate';
import { RawAsset } from '../../../../model/common/type';

class AssetDelegateSerializer implements IAssetSerializer<AssetDelegate> {
    serialize(asset: AssetDelegate): RawAsset {
        return {
            username: asset.username,
        };
    }

    deserialize(rawAsset: RawAsset): AssetDelegate {
        return new AssetDelegate({
            username: rawAsset.username,
        });
    }
}

export const assetDelegateSerializer = new AssetDelegateSerializer();
