"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("../../../model/common/transaction/type");
const referral_1 = require("./asset/referral");
const send_1 = require("./asset/send");
const delegate_1 = require("./asset/delegate");
const stake_1 = require("./asset/stake");
const vote_1 = require("./asset/vote");
const transaction_1 = require("../../../model/common/transaction");
const account_1 = require("../../account");
const ASSET_SERIALIZATORS = {
    [type_1.TransactionType.REFERRAL]: referral_1.assetReferralSerializer,
    [type_1.TransactionType.SEND]: send_1.assetSendSerializer,
    [type_1.TransactionType.SIGNATURE]: send_1.assetSendSerializer,
    [type_1.TransactionType.DELEGATE]: delegate_1.assetDelegateSerializer,
    [type_1.TransactionType.STAKE]: stake_1.assetStakeSerializer,
    [type_1.TransactionType.VOTE]: vote_1.assetVoteSerializer,
};
class TransactionSerializer {
    serialize(trs) {
        const assetSerializer = ASSET_SERIALIZATORS[trs.type];
        const asset = assetSerializer ? assetSerializer.serialize(trs.asset) : trs.asset;
        return {
            id: trs.id,
            blockId: trs.blockId,
            type: trs.type,
            createdAt: trs.createdAt,
            senderPublicKey: trs.senderPublicKey,
            senderAddress: (trs.senderAddress || account_1.getAddressByPublicKey(trs.senderPublicKey)).toString(),
            signature: trs.signature,
            secondSignature: trs.secondSignature,
            fee: trs.fee,
            salt: trs.salt,
            relay: trs.relay,
            confirmations: trs.confirmations,
            asset: asset,
        };
    }
    deserialize(rawTrs) {
        const assetSerializer = ASSET_SERIALIZATORS[rawTrs.type];
        const asset = assetSerializer ? assetSerializer.deserialize(rawTrs.asset) : rawTrs.asset;
        return new transaction_1.Transaction({
            id: rawTrs.id,
            blockId: rawTrs.blockId,
            type: Number(rawTrs.type),
            createdAt: Number(rawTrs.createdAt),
            senderPublicKey: rawTrs.senderPublicKey,
            senderAddress: rawTrs.senderAddress
                ? BigInt(rawTrs.senderAddress)
                : account_1.getAddressByPublicKey(rawTrs.senderPublicKey),
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
exports.transactionSerializer = new TransactionSerializer();
