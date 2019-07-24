import { expect } from 'chai';

import transactionCreator from '../../../src/service/transaction';
import { createAssetVote } from '../../../src/service/transaction/vote';
import { createAssetStake } from '../../../src/service/transaction/stake';
import { TransactionType } from '../../../src/model/common/transaction/type';
import { AssetSend } from '../../../src/model/common/transaction/asset/send';
import { AssetVote } from '../../../src/model/common/transaction/asset/vote';
import { AssetReferral } from '../../../src/model/common/transaction/asset/referral';
import { AssetDelegate } from '../../../src/model/common/transaction/asset/delegate';
import { AssetSignature } from '../../../src/model/common/transaction/asset/signature';
import { createKeyPairBySecret } from '../../../src/util/crypto';
import { TransactionSchema } from '../../../src/model/common/transaction';
import { TransactionStatus } from '../../../src/model/common/transaction/status';
import { VoteType, Address } from '../../../src/model/common/type';
import { Account } from '../../../src/model/common/account';
import { AssetStake } from '../../../src/model/common/transaction/asset/stake';

describe('Transaction creator service', () => {
    it('Create referral transaction', () => {
        const keyPair = createKeyPairBySecret('hen worry two thank unfair salmon smile oven gospel grab latin reason');
        const transactionResponse = transactionCreator.create({
            data: {
                createdAt: 110639834,
                salt: '894cdfa99bc38ca098d38d305c811496',
                senderPublicKey: 'f4ae589b02f97e9ab5bce61cf187bcc96cfb3fdf9a11333703a682b7d47c8dc2',
                type: TransactionType.REFERRAL,
                asset: new AssetReferral({
                    referral: BigInt('4957046151241062485'),
                }),
            },
            sender: undefined,
            keyPair,
        });

        const expected: TransactionSchema<AssetReferral> = {
            id: '4e1b074986ed1704d44c4af38d8cb1d95e5fe1dca67c91e1b5766270fbd37bf7',
            blockId: undefined,
            signature: 'ef9b3b82756f02510bd1380a483610ab52646f53a0a2b1a27c684aab74260588ea790f25' +
                '5cb46813894d9d2a2666dcc15ab157e2623ccd0183afde25a43af50e',
            createdAt: 110639834,
            fee: 0,
            salt: '894cdfa99bc38ca098d38d305c811496',
            senderPublicKey: 'f4ae589b02f97e9ab5bce61cf187bcc96cfb3fdf9a11333703a682b7d47c8dc2',
            type: TransactionType.REFERRAL,
            asset: new AssetReferral({
                referral: BigInt('4957046151241062485'),
            }),
            relay: 0,
            confirmations: 0,
            secondSignature: undefined,
            senderAddress: BigInt('4995063339468361088'),
            status: TransactionStatus.CREATED,
        };

        expect(transactionResponse.success).to.equal(true);
        expect(transactionResponse.data).to.deep.equal(expected);

    });

    it('Create send transaction', () => {
        const keyPair = createKeyPairBySecret('hen worry two thank unfair salmon smile oven gospel grab latin reason');
        const transactionResponse = transactionCreator.create({
            data: {
                createdAt: 110639834,
                salt: '894cdfa99bc38ca098d38d305c811496',
                senderPublicKey: 'f4ae589b02f97e9ab5bce61cf187bcc96cfb3fdf9a11333703a682b7d47c8dc2',
                type: TransactionType.SEND,
                asset: new AssetSend({
                    amount: 10000000000,
                    recipientAddress: BigInt('4957046151241062485'),
                }),
            },
            sender: undefined,
            keyPair,
        });

        const expected: TransactionSchema<AssetSend> = {
            id: '0b8fedd45e0cc1d2ef522b9ec04aaa912f3c963898d2a5ee5f9d7d4bb5755ab0',
            blockId: undefined,
            signature: '54af667daf33adb3a463b8bd1efca2ad0716ec9a18769a60f' +
                '268e80eeddeba6bf9cd71ad9d53e96b789b724ff0620591d0699494a33f477e51320af68be54e00',
            createdAt: 110639834,
            fee: 1000000,
            salt: '894cdfa99bc38ca098d38d305c811496',
            senderPublicKey: 'f4ae589b02f97e9ab5bce61cf187bcc96cfb3fdf9a11333703a682b7d47c8dc2',
            type: TransactionType.SEND,
            asset: new AssetSend({
                amount: 10000000000,
                recipientAddress: BigInt('4957046151241062485'),
            }),
            relay: 0,
            confirmations: 0,
            secondSignature: undefined,
            senderAddress: BigInt('4995063339468361088'),
            status: TransactionStatus.CREATED,
        };

        expect(transactionResponse.success).to.equal(true);
        expect(transactionResponse.data).to.deep.equal(expected);

    });

    it('Create signature transaction', () => {
        const keyPair = createKeyPairBySecret('hen worry two thank unfair salmon smile oven gospel grab latin reason');
        const transactionResponse = transactionCreator.create({
            data: {
                createdAt: 110639834,
                salt: '894cdfa99bc38ca098d38d305c811496',
                senderPublicKey: 'f4ae589b02f97e9ab5bce61cf187bcc96cfb3fdf9a11333703a682b7d47c8dc2',
                type: TransactionType.SIGNATURE,
                asset: new AssetSignature({
                    publicKey: '1aa981869d400a578c11c6dd0d65fa89a21557db44e5d876dcd0cc461db1bfd2',
                }),
            },
            sender: undefined,
            keyPair,
        });

        const expected: TransactionSchema<AssetSignature> = {
            id: 'aa56f87d3d0202b374c6ea519752183f02526491b9c82ff7669507bb73c5da86',
            blockId: undefined,
            signature: '18fca6e5b692e32ad603d67d9f9dd25dd00643d555b80e2a4efe64cb78c449acb29947fe' +
                'f8e62135aaeb193da72391dbfb79ebf30cb17120ea0db322f9f9a205',
            createdAt: 110639834,
            fee: 1000000,
            salt: '894cdfa99bc38ca098d38d305c811496',
            senderPublicKey: 'f4ae589b02f97e9ab5bce61cf187bcc96cfb3fdf9a11333703a682b7d47c8dc2',
            type: TransactionType.SIGNATURE,
            asset: new AssetSignature({
                publicKey: '1aa981869d400a578c11c6dd0d65fa89a21557db44e5d876dcd0cc461db1bfd2',
            }),
            relay: 0,
            confirmations: 0,
            secondSignature: undefined,
            senderAddress: BigInt('4995063339468361088'),
            status: TransactionStatus.CREATED,
        };

        expect(transactionResponse.success).to.equal(true);
        expect(transactionResponse.data).to.deep.equal(expected);

    });

    it('Create delegate transaction', () => {
        const keyPair = createKeyPairBySecret('hen worry two thank unfair salmon smile oven gospel grab latin reason');
        const transactionResponse = transactionCreator.create({
            data: {
                createdAt: 110639834,
                salt: '894cdfa99bc38ca098d38d305c811496',
                senderPublicKey: 'f4ae589b02f97e9ab5bce61cf187bcc96cfb3fdf9a11333703a682b7d47c8dc2',
                type: TransactionType.DELEGATE,
                asset: new AssetDelegate({
                    username: 'DDK',
                }),
            },
            sender: undefined,
            keyPair,
        });

        const expected: TransactionSchema<AssetDelegate> = {
            id: '3aeeb5092c72bf86930e750ecdc04d914d2942e6c73389ff47bb891caa79b423',
            blockId: undefined,
            signature: '6b0f5b4ff22092f3d420aecb4e520e3f8cbebc1af348e4c42767c49bc3966a6e771d9728' +
                '120a34b1dd85158498f2247e36617806bd1f280f6f9432ccaf000a0a',
            createdAt: 110639834,
            fee: 1000000000,
            salt: '894cdfa99bc38ca098d38d305c811496',
            senderPublicKey: 'f4ae589b02f97e9ab5bce61cf187bcc96cfb3fdf9a11333703a682b7d47c8dc2',
            type: TransactionType.DELEGATE,
            asset: new AssetDelegate({
                username: 'ddk',
            }),
            relay: 0,
            confirmations: 0,
            secondSignature: undefined,
            senderAddress: BigInt('4995063339468361088'),
            status: TransactionStatus.CREATED,
        };

        expect(transactionResponse.success).to.equal(true);
        expect(transactionResponse.data).to.deep.equal(expected);

    });

    it('Create stake transaction', () => {
        const keyPair = createKeyPairBySecret('hen worry two thank unfair salmon smile oven gospel grab latin reason');
        const sender = new Account({
            actualBalance: 4112952030480000,
            publicKey: 'f4ae589b02f97e9ab5bce61cf187bcc96cfb3fdf9a11333703a682b7d47c8dc2',
            referrals: [
                new Account({
                    publicKey: '1aa981869d400a578c11c6dd0d65fa89a21557db44e5d876dcd0cc461db1bfd2',
                }),
                new Account({
                    publicKey: '0e37278dff7764749608e1ae6b186c5dae8fd388ca325ce5965f095c01e1dd0b',
                }),
                new Account({
                    publicKey: '702184b93831f9c749898c16853875da3684c11b75532deecce3adaffd86632d',
                }),
                new Account({
                    publicKey: '3306e3072dd8ec2f5af6fb0aabf55a561a96bfdf6ce8fb0bcbd19d50a1865b38',
                }),
                new Account({
                    publicKey: '648c8da6f52f8e5b5c31536e8ed61dd18d55d951a7c0382df7279439c11d5457',
                }),
            ],
            stakes: [
                {
                    airdropReward: { sponsors: new Map() },
                    amount: 400000000,
                    createdAt: 111767077,
                    isActive: true,
                    nextVoteMilestone: 110585266,
                    sourceTransactionId: '7b1b505edec73657d5fdc187671cb212b9b699500aa54e1f81a5864374cb7fbd',
                    voteCount: 23,
                },
                {
                    airdropReward: { sponsors: new Map() },
                    amount: 200000000,
                    createdAt: 111687376,
                    isActive: true,
                    nextVoteMilestone: 110585266,
                    sourceTransactionId: '7b1b505edec73657d5fdc187671cb212b9b699500aa54e1f81a5864374cb7fbd',
                    voteCount: 3,
                },
                {
                    airdropReward: { sponsors: new Map() },
                    amount: 200000000,
                    createdAt: 110650921,
                    isActive: false,
                    nextVoteMilestone: 110585266,
                    sourceTransactionId: 'd62ec106d1ee4d6c631e8d55b4df178b834cee52f1ff8667dd64cffe4727dd51',
                    voteCount: 4,
                },
                {
                    airdropReward: { sponsors: new Map() },
                    amount: 100000000,
                    createdAt: 110650918,
                    isActive: false,
                    nextVoteMilestone: 110585266,
                    sourceTransactionId: '80a59a608317621e98b00ebf19d65376f7ef9dd35bcee2fc448c3d230d915cd9',
                    voteCount: 4,
                },
            ],
        });

        const transactionResponse = transactionCreator.create({
            data: {
                createdAt: 111796273,
                salt: '1fbe58f85bbb7b111855769bc48e9c49',
                senderPublicKey: 'f4ae589b02f97e9ab5bce61cf187bcc96cfb3fdf9a11333703a682b7d47c8dc2',
                type: TransactionType.STAKE,
                asset: createAssetStake({
                    createdAt: 111796273,
                    amount: 100000000,
                }, sender, 1000000000000),
            },
            sender,
            keyPair,
        });

        const expected: TransactionSchema<AssetStake> = {
            id: '9711a82f0ed4ea09fdb288194266df46818b5aec15d35ec1ce82d0610578416e',
            blockId: undefined,
            signature: '8c44c27b4929fdfaf4218c1d9f3a2cf0c05dd4ce42629e35b431b8cec7ca303d0a0aaedf' +
                'c30b502a14e0829d32ccc5a4f5910e79dee2041e80ab5a95d999600d',
            createdAt: 111796273,
            fee: 10000,
            salt: '1fbe58f85bbb7b111855769bc48e9c49',
            senderPublicKey: 'f4ae589b02f97e9ab5bce61cf187bcc96cfb3fdf9a11333703a682b7d47c8dc2',
            type: TransactionType.STAKE,
            asset: new AssetStake({
                airdropReward: {
                    sponsors: new Map<Address, number>()
                        .set(BigInt('16980293496863192173'), 10000000),
                },
                amount: 100000000,
                startTime: 111796273,
                startVoteCount: 0,
            }),
            relay: 0,
            confirmations: 0,
            secondSignature: undefined,
            senderAddress: BigInt('4995063339468361088'),
            status: TransactionStatus.CREATED,
        };

        expect(transactionResponse.success).to.equal(true);
        expect(transactionResponse.data).to.deep.equal(expected);

    });

    it('Create vote transaction', () => {
        const keyPair = createKeyPairBySecret('hen worry two thank unfair salmon smile oven gospel grab latin reason');
        const sender = new Account({
            actualBalance: 4112952030480000,
            publicKey: 'f4ae589b02f97e9ab5bce61cf187bcc96cfb3fdf9a11333703a682b7d47c8dc2',
            referrals: [
                new Account({
                    publicKey: '1aa981869d400a578c11c6dd0d65fa89a21557db44e5d876dcd0cc461db1bfd2',
                }),
                new Account({
                    publicKey: '0e37278dff7764749608e1ae6b186c5dae8fd388ca325ce5965f095c01e1dd0b',
                }),
                new Account({
                    publicKey: '702184b93831f9c749898c16853875da3684c11b75532deecce3adaffd86632d',
                }),
                new Account({
                    publicKey: '3306e3072dd8ec2f5af6fb0aabf55a561a96bfdf6ce8fb0bcbd19d50a1865b38',
                }),
                new Account({
                    publicKey: '648c8da6f52f8e5b5c31536e8ed61dd18d55d951a7c0382df7279439c11d5457',
                }),
            ],
            stakes: [
                {
                    airdropReward: { sponsors: new Map() },
                    amount: 400000000,
                    createdAt: 111767077,
                    isActive: true,
                    nextVoteMilestone: 110585266,
                    sourceTransactionId: '7b1b505edec73657d5fdc187671cb212b9b699500aa54e1f81a5864374cb7fbd',
                    voteCount: 23,
                },
                {
                    airdropReward: { sponsors: new Map() },
                    amount: 200000000,
                    createdAt: 111687376,
                    isActive: true,
                    nextVoteMilestone: 110585266,
                    sourceTransactionId: '7b1b505edec73657d5fdc187671cb212b9b699500aa54e1f81a5864374cb7fbd',
                    voteCount: 3,
                },
                {
                    airdropReward: { sponsors: new Map() },
                    amount: 200000000,
                    createdAt: 110650921,
                    isActive: false,
                    nextVoteMilestone: 110585266,
                    sourceTransactionId: 'd62ec106d1ee4d6c631e8d55b4df178b834cee52f1ff8667dd64cffe4727dd51',
                    voteCount: 4,
                },
                {
                    airdropReward: { sponsors: new Map() },
                    amount: 100000000,
                    createdAt: 110650918,
                    isActive: false,
                    nextVoteMilestone: 110585266,
                    sourceTransactionId: '80a59a608317621e98b00ebf19d65376f7ef9dd35bcee2fc448c3d230d915cd9',
                    voteCount: 4,
                },
            ],
        });

        const transactionResponse = transactionCreator.create({
            data: {
                createdAt: 111796273,
                salt: '1fbe58f85bbb7b111855769bc48e9c49',
                senderPublicKey: 'f4ae589b02f97e9ab5bce61cf187bcc96cfb3fdf9a11333703a682b7d47c8dc2',
                type: TransactionType.VOTE,
                asset: createAssetVote({
                    createdAt: 111796273,
                    votes: [
                        '+137b9f0f839ab3ecd2146bfecd64d31e127d79431211e352bedfeba5fd61a57a',
                        '+83cb3d8641c8e73735cc1b70c915602ffcb6e5a68f14a71056511699050a1a05',
                        '+f959e6c8d279c97d3ec5ba993f04ab740a6e50bec4aad75a8a1e7808a6c5eec7',
                    ],
                    type: VoteType.VOTE,
                }, sender, 1, 1000000000000),
            },
            sender,
            keyPair,
        });

        const expected: TransactionSchema<AssetVote> = {
            id: '06c3eb045b73eebdeab985b3410a8bb44453d2b07d89a97e33ab24915cd43c32',
            blockId: undefined,
            signature: 'f0449b115dc17b908d81070de9421359595719c7ff45d285d' +
                '7f129c3e48351779a12650c3152ef55e7362e2814a888c57dcab212972c4c2fc37768695bf31e0c',
            createdAt: 111796273,
            fee: 60000,
            salt: '1fbe58f85bbb7b111855769bc48e9c49',
            senderPublicKey: 'f4ae589b02f97e9ab5bce61cf187bcc96cfb3fdf9a11333703a682b7d47c8dc2',
            type: TransactionType.VOTE,
            asset: new AssetVote({
                airdropReward: {
                    sponsors: new Map<Address, number>()
                        .set(BigInt('16980293496863192173'), 3000000)
                        .set(BigInt('10577313357240767744'), 1800000)
                        .set(BigInt('13348365708182703460'), 1200000)
                        .set(BigInt('858063025382772148'), 1200000)
                        .set(BigInt('10759421590558995180'), 600000),
                },
                votes: [
                    '+137b9f0f839ab3ecd2146bfecd64d31e127d79431211e352bedfeba5fd61a57a',
                    '+83cb3d8641c8e73735cc1b70c915602ffcb6e5a68f14a71056511699050a1a05',
                    '+f959e6c8d279c97d3ec5ba993f04ab740a6e50bec4aad75a8a1e7808a6c5eec7',
                ],
                reward: 60000000,
                unstake: 400000000,
                type: VoteType.VOTE,
            }),
            relay: 0,
            confirmations: 0,
            secondSignature: undefined,
            senderAddress: BigInt('4995063339468361088'),
            status: TransactionStatus.CREATED,
        };

        expect(transactionResponse.success).to.equal(true);
        expect(transactionResponse.data).to.deep.equal(expected);

    });
});
