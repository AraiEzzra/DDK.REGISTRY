import { AssetSend } from '../../../../model/common/transaction/asset/send';
import { RawAsset } from '../../../../model/common/type';
import { Address } from '../../../../model/common/address';
import { ISerializer } from '../..';

class AssetSendSerializer implements ISerializer<RawAsset, AssetSend> {
    serialize(asset: AssetSend): RawAsset {
        return {
            recipientAddress: asset.recipientAddress.toString(),
            amount: asset.amount,
        };
    }

    deserialize(rawAsset: RawAsset): AssetSend {
        return new AssetSend({
            recipientAddress: new Address(rawAsset.recipientAddress),
            amount: rawAsset.amount,
        });
    }
}

export const assetSendSerializer = new AssetSendSerializer();
