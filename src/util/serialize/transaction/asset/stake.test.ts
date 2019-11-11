import { expect } from 'chai';

import { AssetStake } from '../../../../../src/model/common/transaction/asset/stake';
import { assetStakeSerializer } from '../../../../../src/util/serialize/transaction/asset/stake';
import { Address } from '../../../../model/common/address';

describe('Stake asset serializer', () => {
    it('Serialize', () => {
        const asset = new AssetStake({
            airdropReward: {
                sponsors: new Map()
                    .set(new Address('4995063339468361081'), 100)
                    .set(new Address('4995063339468361002'), 50),
            },
            amount: 100000000,
            startTime: 113426594,
            startVoteCount: 20,
        });

        const serializedAsset = assetStakeSerializer.serialize(asset);

        const expected = {
            airdropReward: {
                sponsors: [
                    ['4995063339468361081', 100],
                    ['4995063339468361002', 50],
                ],
            },
            amount: 100000000,
            startTime: 113426594,
            startVoteCount: 20,
        };

        expect(expected).to.deep.equal(serializedAsset);
    });

    it('Deserialize', () => {
        const serializedAsset = {
            airdropReward: {
                sponsors: [
                    ['4995063339468361081', 100],
                    ['4995063339468361002', 50],
                ],
            },
            amount: 100000000,
            startTime: 113426594,
            startVoteCount: 20,
        };

        const asset = assetStakeSerializer.deserialize(serializedAsset);

        const expected = new AssetStake({
            airdropReward: {
                sponsors: new Map()
                    .set(new Address('4995063339468361081'), 100)
                    .set(new Address('4995063339468361002'), 50),
            },
            amount: 100000000,
            startTime: 113426594,
            startVoteCount: 20,
        });

        expect(expected).to.deep.equal(asset);
    });
});
