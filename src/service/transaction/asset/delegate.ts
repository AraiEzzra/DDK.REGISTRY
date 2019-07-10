import { IAssetService } from 'frontend/src/core/services/transaction/asset/interface';
import { AssetDelegate } from 'shared/model/transaction';
import UITransaction from 'frontend/src/core/models/transaction';
import { Dispatch } from 'redux';
import { Account } from 'shared/model/account';
import { CONST_FEE } from 'frontend/src/utils/constants';
import { UPDATE_ACCOUNT_IS_DELEGATE } from 'frontend/src/core/actions/transactions/actionTypes';
import { Transaction, RawAsset } from 'shared/model/transaction';

class DelegateAssetService implements IAssetService<AssetDelegate> {

    create({ username }): AssetDelegate {
        return {
            username,
        };
    }

    serialize(asset: AssetDelegate): RawAsset {
        return {
            username: asset.username
        };
    }

    getBytes(trs: Transaction<AssetDelegate>): Buffer {
        return Buffer.from(trs.asset.username, 'utf8');
    }

    validate(account: Account, asset: any): Array<string> {
        return [];
    }

    afterCreateHook(trs: UITransaction, dispatch: Dispatch) {
        dispatch({
            type: UPDATE_ACCOUNT_IS_DELEGATE,
            payload: true
        });
    }

    afterDeclineHook(trs: UITransaction, dispatch: Dispatch): void {
        dispatch({
            type: UPDATE_ACCOUNT_IS_DELEGATE,
            payload: false
        });
    }

    afterApplyHook(trs: UITransaction, dispatch: Dispatch) {
    }

    calculateFee(trs: UITransaction, account: Account): number {
        return CONST_FEE.DELEGATE;
    }


}

export default new DelegateAssetService();
