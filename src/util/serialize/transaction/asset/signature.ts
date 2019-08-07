import { IAssetSerializer } from '..';
import { AssetSignature } from '../../../../model/common/transaction/asset/signature';
import { RawAsset } from '../../../../model/common/type';

class AssetSignatureSerializer implements IAssetSerializer<AssetSignature> {
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
