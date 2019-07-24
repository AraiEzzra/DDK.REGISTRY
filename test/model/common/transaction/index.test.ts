import { expect } from 'chai';

import { Transaction } from '../../../../src/model/common/transaction';
import { AssetSend } from '../../../../src/model/common/transaction/asset/send';
import { TransactionType } from '../../../../src/model/common/transaction/type';

describe('Transaction Model', () => {
    it('Copy', () => {
        const trs = new Transaction<AssetSend>({
            id: '2c52682e6a51a9ddfd48a679a95c9fea4e693790aec5968535a482088b6c75bf',
            blockId: 'cbb9449abb9672d33fa2eb200b1c8b03db7c6572dfb6e59dc334c0ab82b63ab0',
            senderPublicKey: 'f4ae589b02f97e9ab5bce61cf187bcc96cfb3fdf9a11333703a682b7d47c8dc2',
            type: TransactionType.SEND,
            createdAt: 0,
            signature: 'dfe6697977493108a37dfd2727c85bd88d8aaf062973bdf6e4b99dd024a251e91319267b0e6e517' +
                '31fa32ffd89b160d93a4bbd59f0c129bc669598b522da8000',
            fee: 0,
            confirmations: 0,
            asset: new AssetSend({
                recipientAddress: BigInt('7897332094363171058'),
                amount: 10000,
            }),
        });

        const copy = trs.getCopy();

        expect(copy).to.deep.equal(trs);
        expect(copy.asset).to.not.equal(trs.asset);
        expect(typeof copy.getCopy).to.equal('function');
    });
});
