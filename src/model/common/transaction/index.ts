import { Address, PublicKey, Timestamp, TransactionId, BlockId } from '../type';
import { TransactionType } from './type';
import { TransactionStatus } from './status';
import { Asset } from './asset';
import { getAddressByPublicKey } from '../../../util/account';
import { clone } from '../../../util/clone';

export type TTransaction<T extends Asset> = {
    id?: TransactionId;
    blockId?: BlockId;
    type?: TransactionType;
    senderPublicKey?: PublicKey;
    signature?: string;
    secondSignature?: string;
    createdAt?: Timestamp;
    salt?: string;
    asset?: T;
    confirmations?: number;
    relay?: number;
    fee?: number;
    status?: TransactionStatus;
    senderAddress?: Address;
};

export class Transaction<T extends Asset> {
    id: TransactionId;
    blockId: BlockId;
    type: TransactionType;
    senderPublicKey: PublicKey;
    signature: string;
    secondSignature: string;
    createdAt: Timestamp;
    salt: string;
    asset: T;
    confirmations: number;
    relay: number;
    fee: number;
    status: TransactionStatus;
    senderAddress: Address;

    constructor(data: TTransaction<T>) {
        this.id = data.id;
        this.blockId = data.blockId;
        this.type = data.type;
        this.senderPublicKey = data.senderPublicKey;
        this.signature = data.signature;
        this.secondSignature = data.secondSignature;
        this.createdAt = data.createdAt;
        this.salt = data.salt;
        this.asset = data.asset;
        this.relay = data.relay || 0;
        this.confirmations = data.confirmations || 0;
        this.fee = data.fee || 0;
        this.status = data.status || TransactionStatus.CREATED;
        this.senderAddress = data.senderAddress || getAddressByPublicKey(data.senderPublicKey);
    }

    public getCopy() {
        return new Transaction<T>(clone(this));
    }
}
