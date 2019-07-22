import { Address, PublicKey } from './type';
import { Delegate } from './delegate';
import { StakeSchema } from './transaction/stake';
import { getAddressByPublicKey } from '../../util/account';

export type AccountSchema = {
    publicKey: PublicKey;
    actualBalance?: number;
    votes?: Array<PublicKey>;
    referrals?: Array<Account>;
    stakes?: Array<StakeSchema>;
    secondPublicKey?: PublicKey;
    delegate?: Delegate;
    address?: Address;
};

export class Account implements AccountSchema {
    address: Address;
    publicKey: PublicKey;
    secondPublicKey: PublicKey;
    actualBalance: number;
    delegate: Delegate;
    votes: Array<PublicKey>;
    referrals: Array<Account>;
    stakes: Array<StakeSchema>;

    constructor(data: AccountSchema) {
        this.publicKey = data.publicKey;
        this.actualBalance = data.actualBalance || 0;
        this.address = data.address || getAddressByPublicKey(data.publicKey);
        this.secondPublicKey = data.secondPublicKey;
        this.delegate = data.delegate;
        this.votes = data.votes || [];
        this.referrals = data.referrals || [];
        this.stakes = data.stakes || [];
    }
}
