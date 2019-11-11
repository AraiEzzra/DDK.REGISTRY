import { AssetSignature } from '../../../../model/common/transaction/asset/signature';
import { RawAsset } from '../../../../model/common/type';
import { ISerializer } from '../..';

class AssetSignatureSerializer implements ISerializer<RawAsset, AssetSignature> {
    serialize(asset: AssetSignature): RawAsset {
        return {
            publicKey: asset.publicKey,
        };
    }

    deserialize(rawAsset: RawAsset): AssetSignature {
        return new AssetSignature({
            publicKey: rawAsset.publicKey,
        });
    }
}

export const assetSignatureSerializer = new AssetSignatureSerializer();
