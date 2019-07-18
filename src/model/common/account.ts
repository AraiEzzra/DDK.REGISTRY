import { Address, PublicKey } from './type';
import { Delegate } from './delegate';
import { StakeSchema } from './transaction/stake';
import { getAddressByPublicKey } from '../../util/account';

export type AccountSchema = {
    publicKey: PublicKey;
    secondPublicKey: PublicKey;
    actualBalance: number;
    delegate: Delegate;
    votes: Array<PublicKey>;
    referrals: Array<AccountSchema>;
    stakes: Array<StakeSchema>;
    address?: Address;
};

export class Account implements AccountSchema {
    address: Address;
    publicKey: PublicKey;
    secondPublicKey: PublicKey;
    actualBalance: number;
    delegate: Delegate;
    votes: Array<PublicKey>;
    referrals: Array<AccountSchema>;
    stakes: Array<StakeSchema>;

    constructor(data: AccountSchema) {
        this.address = data.address || getAddressByPublicKey(data.publicKey);
        this.publicKey = data.publicKey;
        this.secondPublicKey = data.secondPublicKey;
        this.actualBalance = data.actualBalance;
        this.delegate = data.delegate;
        this.votes = data.votes;
        this.referrals = data.referrals;
        this.stakes = data.stakes;
    }
}
