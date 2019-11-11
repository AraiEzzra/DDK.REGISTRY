import { SerializedTransaction } from '../../../model/common/transaction/type';
import { Asset } from '../../../model/common/transaction/asset';
import { RawTransaction } from '../../../model/common/type';
import { Transaction } from '../../../model/common/transaction';
declare class TransactionSerializer {
    serialize(trs: Transaction<Asset>): SerializedTransaction;
    deserialize(rawTrs: RawTransaction): Transaction<Asset>;
}
export declare const transactionSerializer: TransactionSerializer;
export {};
