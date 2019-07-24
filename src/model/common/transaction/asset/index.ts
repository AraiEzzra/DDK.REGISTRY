import { Account } from '../../account';

export abstract class Asset {
    abstract calculateFee(sender: Account): number;
    abstract getCopy(): any;
    abstract getBytes(): Buffer;
}
