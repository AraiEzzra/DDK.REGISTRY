import { AssetDelegate } from '../../../../model/common/transaction/asset/delegate';
import { RawAsset } from '../../../../model/common/type';
import { ISerializer } from '../..';

class AssetDelegateSerializer implements ISerializer<RawAsset, AssetDelegate> {
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
