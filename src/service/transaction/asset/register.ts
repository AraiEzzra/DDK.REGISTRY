import { IAssetService } from 'frontend/src/core/services/transaction/asset/interface';
import { AssetRegister } from 'shared/model/transaction';
import UITransaction from 'frontend/src/core/models/transaction';
import { Dispatch } from 'redux';
import { Account } from 'shared/model/account';
import { CONST_FEE } from 'frontend/src/utils/constants';
import { Transaction, RawAsset } from 'shared/model/transaction';
import BUFFER from 'shared/utils/buffer';

class RegisterAssetService implements IAssetService<AssetRegister> {

    create({ address }): AssetRegister {
        return {
            referral: address,
        };
    }

    serialize(asset: AssetRegister): RawAsset {
        return {
            referral: asset.referral
        };
    }

    getBytes(trs: Transaction<AssetRegister>): Buffer {
        const buff = Buffer.alloc(BUFFER.LENGTH.INT64);
        BUFFER.writeUInt64LE(buff, trs.asset.referral, 0);
        return buff;
    }

    validate(account: Account, asset: any): Array<string> {
        return [];
    }

    afterCreateHook(trs: UITransaction, dispatch: Dispatch) {
    }

    afterDeclineHook(trs: UITransaction, dispatch: Dispatch): void {
    }

    afterApplyHook(trs: UITransaction, dispatch: Dispatch) {
    }

    calculateFee(trs: UITransaction, account: Account): number {
        return CONST_FEE.REGISTER;
    }

}

export default new RegisterAssetService();
