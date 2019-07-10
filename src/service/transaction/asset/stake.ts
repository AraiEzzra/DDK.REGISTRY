import { IAssetService } from 'frontend/src/core/services/transaction/asset/interface';
import { AssetStake } from 'shared/model/transaction';
import UITransaction from 'frontend/src/core/models/transaction';
import { Dispatch } from 'redux';
import { Account } from 'shared/model/account';
import { MONEY_MULTIPLIER, PERCENT_FEE } from 'frontend/src/utils/constants';
import {
    UPDATE_ACCOUNT_ADD_STAKE,
    UPDATE_ACCOUNT_BALANCE,
    UPDATE_ACCOUNT_REMOVE_STAKE, UPDATE_ACCOUNT_STAKE
} from 'frontend/src/core/actions/transactions/actionTypes';
import { StakeOrder } from 'shared/model/stake';
import { Transaction, TransactionType, AssetAirdrop, RawAsset } from 'shared/model/transaction';
import BUFFER from 'shared/utils/buffer';
import { getAirdropReward } from 'shared/utils/reward';

class StakeAssetService implements IAssetService<AssetStake> {
    create({ amount, sender, createdAt }): AssetStake {

        amount = amount * MONEY_MULTIPLIER;

        const airdropReward: AssetAirdrop = getAirdropReward(
            sender,
            amount,
            TransactionType.STAKE
        );

        return {
            amount,
            startTime: createdAt,
            airdropReward,
            startVoteCount: 0
        };
    }

    serialize(asset: AssetStake): RawAsset {
        return {
            amount: asset.amount,
            startTime: asset.startTime,
            startVoteCount: asset.startVoteCount,
            airdropReward: {
                sponsors: Array.from(asset.airdropReward.sponsors)
                    .map(elem => [elem[0].toString(), elem[1]])
            }
        };
    }

    getBytes(trs: Transaction<AssetStake>): Buffer {
        let offset = 0;
        const buff = Buffer.alloc(
            BUFFER.LENGTH.INT64 +  // asset.amount
            BUFFER.LENGTH.UINT32 + // asset.startTime
            BUFFER.LENGTH.BYTE     // asset.startVoteCount
        );
        offset = BUFFER.writeUInt64LE(buff, String(trs.asset.amount || 0), offset);
        buff.writeInt32LE(trs.asset.startTime, offset);
        offset += BUFFER.LENGTH.UINT32;
        buff.writeInt8(trs.asset.startVoteCount, offset);

        const referralBuffer = Buffer.alloc(
            BUFFER.LENGTH.INT64 + // asset.airdropReward.address
            BUFFER.LENGTH.INT64   // asset.airdropReward.amount
        );
        offset = 0;
        if (trs.asset.airdropReward.sponsors && trs.asset.airdropReward.sponsors.size > 0) {
            for (const [sponsorAddress, reward] of trs.asset.airdropReward.sponsors) {
                offset = BUFFER.writeUInt64LE(referralBuffer, sponsorAddress, offset);
                BUFFER.writeUInt64LE(referralBuffer, String(reward || 0), offset);
            }
        }

        return Buffer.concat([buff, referralBuffer]);
    }

    validate(account: Account, asset: any): Array<string> {
        return [];
    }

    afterCreateHook(trs: UITransaction, dispatch: Dispatch): void {
        dispatch({
            type: UPDATE_ACCOUNT_BALANCE,
            payload: -trs.asset.amount
        });
        dispatch({
            type: UPDATE_ACCOUNT_ADD_STAKE,
            payload: new StakeOrder({
                amount: trs.asset.amount,
                createdAt: trs.createdAt,
                isActive: true,
                nextVoteMilestone: trs.createdAt,
                sourceTransactionId: trs.id,
                voteCount: 0,
                airdropReward: {}
            })
        });

    }

    afterDeclineHook(trs: UITransaction, dispatch: Dispatch): void {
        dispatch({
            type: UPDATE_ACCOUNT_BALANCE,
            payload: trs.asset.amount
        });
        dispatch({
            type: UPDATE_ACCOUNT_REMOVE_STAKE,
            payload: trs.id,
        });
    }

    afterApplyHook(trs: UITransaction, dispatch: Dispatch) {
        dispatch({
            type: UPDATE_ACCOUNT_STAKE,
            payload: { id: trs.id, ...trs.asset }
        });
    }

    calculateFee(trs: UITransaction, account: Account): number {
        return Math.ceil(Number(trs.asset.amount) * PERCENT_FEE.STAKE / 100);
    }

}

export default new StakeAssetService();
