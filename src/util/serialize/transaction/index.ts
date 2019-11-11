import { TransactionType, SerializedTransaction } from '../../../model/common/transaction/type';
import { Asset } from '../../../model/common/transaction/asset';
import { RawAsset, RawTransaction } from '../../../model/common/type';
import { assetReferralSerializer } from './asset/referral';
import { assetSendSerializer } from './asset/send';
import { assetDelegateSerializer } from './asset/delegate';
import { assetStakeSerializer } from './asset/stake';
import { assetVoteSerializer } from './asset/vote';
import { Transaction } from '../../../model/common/transaction';
import { getAddressByPublicKey } from '../../account';
import { Address } from '../../../model/common/address';
import { ISerializer } from '..';

const ASSET_SERIALIZATORS: { [key: string]: ISerializer<RawAsset, Asset> } = {
    [TransactionType.REFERRAL]: assetReferralSerializer,
    [TransactionType.SEND]: assetSendSerializer,
    [TransactionType.SIGNATURE]: assetSendSerializer,
    [TransactionType.DELEGATE]: assetDelegateSerializer,
    [TransactionType.STAKE]: assetStakeSerializer,
    [TransactionType.VOTE]: assetVoteSerializer,
};

class TransactionSerializer {
    serialize(trs: Transaction<Asset>): SerializedTransaction {
        const assetSerializer: ISerializer<RawAsset, Asset> = ASSET_SERIALIZATORS[trs.type];
        const asset = assetSerializer ? assetSerializer.serialize(trs.asset) : trs.asset;

        return {
            id: trs.id,
            blockId: trs.blockId,
            type: trs.type,
            createdAt: trs.createdAt,
            senderPublicKey: trs.senderPublicKey,
            senderAddress: (trs.senderAddress || getAddressByPublicKey(trs.senderPublicKey)).toString(),
            signature: trs.signature,
            secondSignature: trs.secondSignature,
            fee: trs.fee,
            salt: trs.salt,
            relay: trs.relay,
            confirmations: trs.confirmations,
            asset: asset,
        };
    }

    deserialize(rawTrs: RawTransaction): Transaction<Asset> {
        const assetSerializer: ISerializer<RawAsset, Asset> = ASSET_SERIALIZATORS[rawTrs.type];
        const asset = assetSerializer ? assetSerializer.deserialize(rawTrs.asset) : rawTrs.asset;

        return new Transaction<Asset>({
            id: rawTrs.id,
            blockId: rawTrs.blockId,
            type: Number(rawTrs.type),
            createdAt: Number(rawTrs.createdAt),
            senderPublicKey: rawTrs.senderPublicKey,
            senderAddress: rawTrs.senderAddress
                ? new Address(rawTrs.senderAddress)
                : getAddressByPublicKey(rawTrs.senderPublicKey),
            signature: rawTrs.signature,
            secondSignature: rawTrs.secondSignature,
            fee: Number(rawTrs.fee),
            salt: rawTrs.salt,
            relay: rawTrs.relay || 0,
            confirmations: rawTrs.confirmations,
            asset: asset,
        });
    }
}

export const transactionSerializer = new TransactionSerializer();
