import Benchmark from 'benchmark';

import { transactionCreator } from '.';
import { TransactionSchema } from '../../model/common/transaction';
import { AssetSend } from '../../model/common/transaction/asset/send';
import { TransactionType } from '../../model/common/transaction/type';

const suite = new Benchmark.Suite;

const transaction: TransactionSchema<AssetSend> = {
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
};

suite
    .add('transactionCreator.getBytes', function () {
        transactionCreator.getBytes(transaction);
    })
    // add listeners
    .on('cycle', function (event) {
        console.log(String(event.target));
    })
    .on('complete', function () {
        console.log('Fastest is ' + this.filter('fastest').map('name'));
    })
    // run async
    .run({ 'async': true });
