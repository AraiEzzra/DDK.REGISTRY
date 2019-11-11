import { expect } from 'chai';

import { AssetSend } from '../../../../../src/model/common/transaction/asset/send';
import { assetSendSerializer } from '../../../../../src/util/serialize/transaction/asset/send';
import { Address } from '../../../../model/common/address';

describe('Send asset serializer', () => {
    it('Serialize', () => {
        const asset = new AssetSend({
            recipientAddress: new Address('10692727514166545843'),
            amount: 100000000,
        });

        const serializedAsset = assetSendSerializer.serialize(asset);

        const expected = {
            recipientAddress: '10692727514166545843',
            amount: 100000000,
        };

        expect(expected).to.deep.equal(serializedAsset);
    });

    it('Deserialize', () => {
        const serializedAsset = {
            recipientAddress: '10692727514166545843',
            amount: 100000000,
        };

        const asset = assetSendSerializer.deserialize(serializedAsset);

        const expected = new AssetSend({
            recipientAddress: new Address('10692727514166545843'),
            amount: 100000000,
        });

        expect(expected).to.deep.equal(asset);
    });
});
