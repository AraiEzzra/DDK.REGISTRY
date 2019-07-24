/// <reference types="node" />
import { Account } from '../../account';
export declare abstract class Asset {
    abstract calculateFee(sender: Account): number;
    abstract getCopy(): any;
    abstract getBytes(): Buffer;
}
