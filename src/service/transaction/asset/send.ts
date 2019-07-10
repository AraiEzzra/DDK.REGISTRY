import { IAssetService } from 'frontend/src/core/services/transaction/asset/interface';
import { AssetTransfer } from 'shared/model/transaction';
import { MONEY_MULTIPLIER, PERCENT_FEE } from 'frontend/src/utils/constants';
import UITransaction from 'frontend/src/core/models/transaction';
import { Dispatch } from 'redux';
import { Account } from 'shared/model/account';
import { UPDATE_ACCOUNT_BALANCE } from 'frontend/src/core/actions/transactions/actionTypes';
import { Transaction, RawAsset } from 'shared/model/transaction';
import BUFFER from 'shared/utils/buffer';

class SendAssetService implements IAssetService<AssetTransfer> {

    create({ address, amount }): AssetTransfer {
        return {
            recipientAddress: address,
            amount: Math.round(amount * MONEY_MULTIPLIER)
        };
    }

    serialize(asset: AssetTransfer): RawAsset {
        return {
            recipientAddress: asset.recipientAddress.toString(),
            amount: asset.amount
        };
    }

    getBytes(trs: Transaction<AssetTransfer>): Buffer {
        const buff = Buffer.alloc(
            BUFFER.LENGTH.INT64 + // recipientAddress
            BUFFER.LENGTH.INT64  // amount
        );
        let offset = BUFFER.writeUInt64LE(buff, trs.asset.recipientAddress, 0);
        BUFFER.writeUInt64LE(buff, String(trs.asset.amount), offset);
        return buff;
    }

    validate(account: Account, asset: any): Array<string> {
        return [];
    }

    afterCreateHook(trs: UITransaction, dispatch: Dispatch): void {
        dispatch({
            type: UPDATE_ACCOUNT_BALANCE,
            payload: -trs.asset.amount
        });
    }

    afterDeclineHook(trs: UITransaction, dispatch: Dispatch): void {
        dispatch({
            type: UPDATE_ACCOUNT_BALANCE,
            payload: trs.asset.amount
        });
    }

    afterApplyHook(trs: UITransaction, dispatch: Dispatch) {
    }

    calculateFee(trs: UITransaction, account: Account): number {
        return Math.ceil(Number(trs.asset.amount) * PERCENT_FEE.SEND / 100);
    }

}

export default new SendAssetService();
