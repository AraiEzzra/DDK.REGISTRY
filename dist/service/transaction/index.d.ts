/// <reference types="node" />
import { Transaction, TransactionSchema } from '../../model/common/transaction';
import { Ed } from '../../util/ed';
import { ResponseEntity } from '../../model/responseEntity';
import { Asset } from '../../model/common/transaction/asset';
import { TransactionCreationData } from '../../model/common/type';
export interface ITransactionCreator {
    create(params: TransactionCreationData): ResponseEntity<Transaction<any>>;
    getBytes(trs: TransactionSchema<Asset>, skipSignature: boolean, skipSecondSignature: boolean): Buffer;
    getHash(trs: TransactionSchema<Asset>): Buffer;
}
export declare class TransactionCreator implements ITransactionCreator {
    private ed;
    constructor(_ed: Ed);
    create(params: TransactionCreationData): ResponseEntity<Transaction<any>>;
    getBytes(trs: TransactionSchema<Asset>, skipSignature?: boolean, skipSecondSignature?: boolean): Buffer;
    getHash(trs: TransactionSchema<Asset>): Buffer;
    getId(trs: TransactionSchema<any>): string;
    private sign;
}
declare const _default: TransactionCreator;
export default _default;
