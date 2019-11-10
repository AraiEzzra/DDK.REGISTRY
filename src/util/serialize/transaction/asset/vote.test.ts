import { expect } from 'chai';

import { AssetVote } from '../../../../../src/model/common/transaction/asset/vote';
import { assetVoteSerializer } from '../../../../../src/util/serialize/transaction/asset/vote';
import { VoteType } from '../../../../../src/model/common/type';

describe('Vote asset serializer', () => {
    it('Serialize', () => {
        const asset = new AssetVote({
            airdropReward: {
                sponsors: new Map()
                    .set(BigInt('4995063339468361081'), 100)
                    .set(BigInt('4995063339468361002'), 50),
            },
            type: VoteType.VOTE,
            reward: 10000000,
            unstake: 0,
            votes: ['+137b9f0f839ab3ecd2146bfecd64d31e127d79431211e352bedfeba5fd61a57a']
        });

        const serializedAsset = assetVoteSerializer.serialize(asset);

        const expected = {
            airdropReward: {
                sponsors: [
                    ['4995063339468361081', 100],
                    ['4995063339468361002', 50],
                ],
            },
            type: VoteType.VOTE,
            reward: 10000000,
            unstake: 0,
            votes: ['+137b9f0f839ab3ecd2146bfecd64d31e127d79431211e352bedfeba5fd61a57a']
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
            type: VoteType.VOTE,
            reward: 10000000,
            unstake: 0,
            votes: ['+137b9f0f839ab3ecd2146bfecd64d31e127d79431211e352bedfeba5fd61a57a']
        };

        const asset = assetVoteSerializer.deserialize(serializedAsset);

        const expected = new AssetVote({
            airdropReward: {
                sponsors: new Map()
                    .set(BigInt('4995063339468361081'), 100)
                    .set(BigInt('4995063339468361002'), 50),
            },
            type: VoteType.VOTE,
            reward: 10000000,
            unstake: 0,
            votes: ['+137b9f0f839ab3ecd2146bfecd64d31e127d79431211e352bedfeba5fd61a57a']
        });

        expect(expected).to.deep.equal(asset);
    });
});
