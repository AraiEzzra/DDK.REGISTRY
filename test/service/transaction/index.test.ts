import { expect } from 'chai';

import transactionCreator from '../../../src/service/transaction';
import { TransactionType } from '../../../src/model/common/transaction/type';
import { AssetSend } from '../../../src/model/common/transaction/asset/send';
import { createKeyPairBySecret } from '../../../src/util/crypto';
import { TransactionSchema } from '../../../src/model/common/transaction';
import { TransactionStatus } from '../../../src/model/common/transaction/status';

describe('Transaction creator service', () => {
    it('Create send transaction', () => {
        const keyPair = createKeyPairBySecret('hen worry two thank unfair salmon smile oven gospel grab latin reason');
        const transactionResponse = transactionCreator.create({
            createdAt: 110639834,
            salt: '894cdfa99bc38ca098d38d305c811496',
            senderPublicKey: 'f4ae589b02f97e9ab5bce61cf187bcc96cfb3fdf9a11333703a682b7d47c8dc2',
            type: TransactionType.SEND,
            asset: new AssetSend({
                amount: 10000000000,
                recipientAddress: BigInt('4957046151241062485'),
            }),
        }, undefined, keyPair);

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
});
