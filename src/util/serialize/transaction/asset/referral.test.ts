import { expect } from 'chai';

import { AssetReferral } from '../../../../../src/model/common/transaction/asset/referral';
import { assetReferralSerializer } from '../../../../../src/util/serialize/transaction/asset/referral';
import { Address } from '../../../../model/common/address';

describe('Referral asset serializer', () => {
    it('Serialize', () => {
        const asset = new AssetReferral({ referral: new Address('10692727514166545843') });

        const serializedAsset = assetReferralSerializer.serialize(asset);

        const expected = { referral: '10692727514166545843' };

        expect(expected).to.deep.equal(serializedAsset);
    });

    it('Deserialize', () => {
        const serializedAsset = { referral: '10692727514166545843' };

        const asset = assetReferralSerializer.deserialize(serializedAsset);

        const expected = new AssetReferral({ referral: new Address('10692727514166545843') });

        expect(expected).to.deep.equal(asset);
    });
});
