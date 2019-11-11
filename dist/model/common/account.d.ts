import { PublicKey } from './type';
import { Delegate } from './delegate';
import { StakeSchema } from './transaction/stake';
import { Address } from './address';
export declare type AccountSchema = {
    publicKey: PublicKey;
    actualBalance?: number;
    votes?: Array<PublicKey>;
    referrals?: Array<Account>;
    stakes?: Array<StakeSchema>;
    secondPublicKey?: PublicKey;
    delegate?: Delegate;
    address?: Address;
};
export declare class Account implements AccountSchema {
    address: Address;
    publicKey: PublicKey;
    secondPublicKey: PublicKey;
    actualBalance: number;
    delegate: Delegate;
    votes: Array<PublicKey>;
    referrals: Array<Account>;
    stakes: Array<StakeSchema>;
    constructor(data: AccountSchema);
}
