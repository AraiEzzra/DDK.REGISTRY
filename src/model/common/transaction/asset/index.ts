import { Account } from '../../account';

export abstract class Asset {
    abstract calculateFee(sender: Account): number;
    abstract getCopy(): any;
    abstract getBytes(): Buffer;
    abstract getBufferSize(): number;
    abstract writeBytes(buffer: Buffer, offset: number): number;
}
