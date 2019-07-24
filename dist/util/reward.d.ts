import { Account } from '../model/common/account';
import { TransactionType } from '../model/common/transaction/type';
import { AirdropReward } from '../model/common/type';
export declare const calculateTotalRewardAndUnstake: (createdAt: number, sender: Account, isDownVote: boolean, lastBlockHeight: number) => {
    reward: number;
    unstake: number;
};
export declare const calculateAirdropReward: (sender: Account, amount: number, transactionType: TransactionType, availableAirdropBalance: number) => AirdropReward;
