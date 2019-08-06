import { IAssetSerializer } from '..';
import { AssetSend } from '../../../../model/common/transaction/asset/send';
import { RawAsset } from '../../../../model/common/type';

class AssetSendSerializer implements IAssetSerializer<AssetSend> {
    serialize(asset: AssetSend): RawAsset {
        return {
            recipientAddress: asset.recipientAddress.toString(),
            amount: asset.amount,
        };
    }

    deserialize(rawAsset: RawAsset): AssetSend {
        return new AssetSend({
            recipientAddress: BigInt(rawAsset.recipientAddress),
            amount: rawAsset.amount,
        });
    }
}

export const assetSendSerializer = new AssetSendSerializer();
