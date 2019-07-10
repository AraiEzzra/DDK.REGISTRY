import { IAssetService } from 'frontend/src/core/services/transaction/asset/interface';
import { AssetSignature } from 'shared/model/transaction';
import UITransaction from 'frontend/src/core/models/transaction';
import { Dispatch } from 'redux';
import { Account } from 'shared/model/account';
import { CONST_FEE } from 'frontend/src/utils/constants';
import { UPDATE_ACCOUNT_SECOND_SIGNATURE } from 'frontend/src/core/actions/transactions/actionTypes';
import { Transaction, RawAsset } from 'shared/model/transaction';

class SignatureAssetService implements IAssetService<AssetSignature> {

    create({ publicKey }): AssetSignature {
        return {
            publicKey,
        };
    }

    serialize(asset: AssetSignature): RawAsset {
        return {
            publicKey: asset.publicKey
        };
    }

    getBytes(trs: Transaction<AssetSignature>): Buffer {
        return Buffer.from(trs.asset.publicKey, 'hex');
    }

    validate(account: Account, asset: any): Array<string> {
        return [];
    }

    afterCreateHook(trs: UITransaction, dispatch: Dispatch) {
        dispatch({
            type: UPDATE_ACCOUNT_SECOND_SIGNATURE,
            payload: trs.asset.publicKey
        });
    }

    afterDeclineHook(trs: UITransaction, dispatch: Dispatch): void {
        dispatch({
            type: UPDATE_ACCOUNT_SECOND_SIGNATURE,
            payload: null
        });
    }

    afterApplyHook(trs: UITransaction, dispatch: Dispatch) {
    }

    calculateFee(trs: UITransaction, account: Account): number {
        return CONST_FEE.SIGNATURE;
    }

}

export default new SignatureAssetService();
