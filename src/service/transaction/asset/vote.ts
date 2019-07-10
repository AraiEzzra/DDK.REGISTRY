import { IAssetService } from 'frontend/src/core/services/transaction/asset/interface';
import { AssetVote, VoteType } from 'shared/model/transaction';
import UITransaction from 'frontend/src/core/models/transaction';
import { Dispatch } from 'redux';
import { Account } from 'shared/model/account';
import { PERCENT_FEE } from 'frontend/src/utils/constants';
import {
    UPDATE_ACCOUNT_ADD_VOTE,
    UPDATE_ACCOUNT_REMOVE_VOTE
} from 'frontend/src/core/actions/transactions/actionTypes';
import { getSumStakesAmount } from 'frontend/src/utils';
import { RESET_SELECTED_DELEGATE_ROWS, RESET_DELEGATE_TEMP } from 'frontend/src/core/actions/delegates/actionTypes';
import { UPDATE_STAKE_VOTE_COUNT } from 'frontend/src/core/actions/stake/actionTypes';
import { Transaction, AssetAirdrop, RawAsset, TransactionType } from 'shared/model/transaction';
import BUFFER from 'shared/utils/buffer';
import CONSTANTS from 'shared/config/constants';
import { getAirdropReward, calculateTotalRewardAndUnstake } from 'shared/utils/reward';
import State from 'frontend/src/core/models/state';
import { Delegate } from 'shared/model/delegate';

class VoteAssetService implements IAssetService<AssetVote> {

    create({ votes, type, sender }): AssetVote {
        const totals: { reward: number, unstake: number} =
            calculateTotalRewardAndUnstake(sender, type === VoteType.DOWN_VOTE);
        const airdropReward: AssetAirdrop = getAirdropReward(sender, totals.reward, TransactionType.VOTE);

        return {
            votes: votes.map((vote: string) => `${type}${vote}`),
            reward: totals.reward || 0,
            unstake: totals.unstake || 0,
            airdropReward
        };
    }

    serialize(asset: AssetVote): RawAsset {
        return {
            votes: asset.votes,
            reward: asset.reward,
            unstake: asset.unstake,
            airdropReward: {
                sponsors: Array.from(asset.airdropReward.sponsors)
                    .map(elem => [elem[0].toString(), elem[1]])
            }
        };
    }

    getBytes(trs: Transaction<AssetVote>): Buffer {
        let offset = 0;
        const buff = Buffer.alloc(
            BUFFER.LENGTH.INT64 + // reward
            BUFFER.LENGTH.INT64   // unstake
        );

        offset = BUFFER.writeUInt64LE(buff, String(trs.asset.reward), offset);
        offset = BUFFER.writeUInt64LE(buff, String(trs.asset.unstake), offset);

        // airdropReward.sponsors up to 15 sponsors
        const sponsorsBuffer = Buffer.alloc(
            (BUFFER.LENGTH.INT64 + BUFFER.LENGTH.INT64) * CONSTANTS.REFERRAL.MAX_COUNT);

        offset = 0;

        for (const [sponsorAddress, reward] of trs.asset.airdropReward.sponsors) {
            offset = BUFFER.writeUInt64LE(sponsorsBuffer, sponsorAddress, offset);
            offset = BUFFER.writeUInt64LE(sponsorsBuffer, String(reward || 0), offset);
        }

        const voteBuffer = trs.asset.votes ? Buffer.from(trs.asset.votes.join(''), 'utf8') : Buffer.from([]);
        return Buffer.concat([buff, sponsorsBuffer, voteBuffer]);
    }

    validate(account: Account, asset: any): Array<string> {
        return [];
    }

    afterCreateHook(trs: UITransaction, dispatch: Dispatch, state: State) {
        const trsType = trs.asset.votes[0][0];
        trs.asset.votes = trs.asset.votes.map(vote => vote.substr(1, vote.length - 1));
        if (trs.asset.votes.length !== 0 && trsType === VoteType.VOTE) {
            dispatch({
                type: UPDATE_ACCOUNT_ADD_VOTE,
                payload: state.ui.delegates.selection.delegates
            });
            dispatch({
                type: RESET_SELECTED_DELEGATE_ROWS
            });
        } else {
            dispatch({
                type: UPDATE_ACCOUNT_REMOVE_VOTE,
                payload: trs.asset.votes,
            });
            dispatch({
                type: RESET_SELECTED_DELEGATE_ROWS
            });
        }
    }

    afterDeclineHook(trs: UITransaction, dispatch: Dispatch, state: State): void {
        const trsType = trs.asset.votes[0][0];
        trs.asset.votes = trs.asset.votes.map(vote => vote.substr(1, vote.length - 1));
        if (trs.asset.votes.length !== 0 && trsType === VoteType.VOTE) {
            dispatch({
                type: UPDATE_ACCOUNT_REMOVE_VOTE,
                payload: trs.asset.votes,
            });
        } else {
            dispatch({
                type: UPDATE_ACCOUNT_ADD_VOTE,
                payload: {...state.ui.delegates.temp}
            });
            dispatch({
                type: RESET_DELEGATE_TEMP
            });
        }
    }

    afterApplyHook(trs: UITransaction, dispatch: Dispatch) {
        if (trs.asset.votes.length !== 0 && trs.asset.votes[0][0] === VoteType.VOTE) {
            dispatch({
                type: UPDATE_STAKE_VOTE_COUNT
            });
        }
    }

    calculateFee(trs: UITransaction, account: Account): number {
        return Math.ceil(account.stakes.reduce(getSumStakesAmount, 0) * PERCENT_FEE.VOTE / 100);
    }

}

export default new VoteAssetService();
