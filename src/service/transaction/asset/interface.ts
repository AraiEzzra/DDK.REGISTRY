import UITransaction from 'frontend/src/core/models/transaction';
import { Dispatch } from 'redux';
import { Account } from 'shared/model/account';
import { Transaction, RawAsset, Asset } from 'shared/model/transaction';
import State from 'frontend/src/core/models/state';

export interface IAssetService<T> {

    create(asset: any): T;

    calculateFee(trs: UITransaction, account: Account): number;

    validate(account: Account, asset: any): Array<string>;

    afterCreateHook(trs: UITransaction, dispatch: Dispatch, state: State): void;

    afterDeclineHook(trs: UITransaction, dispatch: Dispatch, state: State): void;

    afterApplyHook(trs: UITransaction, dispatch: Dispatch): void;

    getBytes(trs: Transaction<T>): Buffer;

    serialize(asset: Asset): RawAsset;
}
