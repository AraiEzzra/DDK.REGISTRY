import { Account } from '../../model/common/account';
import { Timestamp } from '../../model/common/type';
import { AssetStake } from '../../model/common/transaction/asset/stake';
export declare type StakeData = {
    createdAt: Timestamp;
    amount: number;
    startVoteCount?: number;
};
export declare const createAssetStake: (data: StakeData, sender: Account, availableAirdropBalance: number) => AssetStake;
