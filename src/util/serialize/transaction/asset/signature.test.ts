import { expect } from 'chai';

import { AssetSignature } from '../../../../../src/model/common/transaction/asset/signature';
import { assetSignatureSerializer } from '../../../../../src/util/serialize/transaction/asset/signature';

describe('Signature asset serializer', () => {
    it('Serialize', () => {
        const asset = new AssetSignature({
            publicKey: '0ca9bbb716a9cfca56145dd9f9e84a85106d03b709d550f622c3ea926e9f0c44',
        });

        const serializedAsset = assetSignatureSerializer.serialize(asset);

        const expected = { publicKey: '0ca9bbb716a9cfca56145dd9f9e84a85106d03b709d550f622c3ea926e9f0c44' };

        expect(expected).to.deep.equal(serializedAsset);
    });

    it('Deserialize', () => {
        const serializedAsset = { publicKey: '0ca9bbb716a9cfca56145dd9f9e84a85106d03b709d550f622c3ea926e9f0c44' };

        const asset = assetSignatureSerializer.deserialize(serializedAsset);

        const expected = new AssetSignature({
            publicKey: '0ca9bbb716a9cfca56145dd9f9e84a85106d03b709d550f622c3ea926e9f0c44',
        });

        expect(expected).to.deep.equal(asset);
    });
});
