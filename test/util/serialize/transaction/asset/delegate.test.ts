import { expect } from 'chai';

import { AssetDelegate } from '../../../../../src/model/common/transaction/asset/delegate';
import { assetDelegateSerializer } from '../../../../../src/util/serialize/transaction/asset/delegate';

describe('Delegate asset serializer', () => {
    it('Serialize', () => {
        const asset = new AssetDelegate({ username: 'delegate1' });

        const serializedAsset = assetDelegateSerializer.serialize(asset);

        const expected = { username: 'delegate1' };

        expect(expected).to.deep.equal(serializedAsset);
    });

    it('Deserialize', () => {
        const serializedAsset = { username: 'delegate1' };

        const asset = assetDelegateSerializer.deserialize(serializedAsset);

        const expected = new AssetDelegate({ username: 'delegate1' });

        expect(expected).to.deep.equal(asset);
    });
});
