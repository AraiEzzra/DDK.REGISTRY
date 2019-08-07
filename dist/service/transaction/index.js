"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = __importDefault(require("crypto"));
const transaction_1 = require("../../model/common/transaction");
const ed_1 = require("../../util/ed");
const type_1 = require("../../model/common/transaction/type");
const responseEntity_1 = require("../../model/common/responseEntity");
const account_1 = require("../../util/account");
const buffer_1 = __importDefault(require("../../util/buffer"));
const transaction_2 = require("../../util/transaction");
const const_1 = require("../../const");
const crypto_2 = require("../../util/crypto");
const slot_1 = require("../slot");
class TransactionCreator {
    constructor(_ed) {
        this.ed = _ed;
    }
    create(params) {
        const { data, sender, secret, secondSecret } = params;
        const keyPair = crypto_2.createKeyPairBySecret(secret);
        const errors = [];
        if (!type_1.TransactionType[data.type]) {
            errors.push(`Unknown transaction type ${data.type}`);
            return new responseEntity_1.ResponseEntity({ errors });
        }
        const senderPublicKey = keyPair.publicKey.toString('hex');
        const transaction = Object.assign({}, data, { senderPublicKey, senderAddress: account_1.getAddressByPublicKey(senderPublicKey), fee: data.asset.calculateFee(sender) });
        if (!transaction.salt) {
            transaction.salt = crypto_1.default.randomBytes(const_1.SALT_LENGTH).toString('hex');
        }
        if (!transaction.createdAt) {
            transaction.createdAt = slot_1.slotService.getTime();
        }
        transaction.signature = this.sign(keyPair, transaction);
        if (secondSecret) {
            const secondKeyPair = crypto_2.createKeyPairBySecret(secondSecret);
            transaction.secondSignature = this.sign(secondKeyPair, transaction);
        }
        transaction.id = this.getId(transaction);
        return new responseEntity_1.ResponseEntity({ data: new transaction_1.Transaction(transaction) });
    }
    getBytes(trs, skipSignature = false, skipSecondSignature = false) {
        const assetBytes = trs.asset.getBytes();
        const bytes = Buffer.alloc(transaction_2.TRANSACTION_BUFFER_SIZE);
        let offset = 0;
        offset = buffer_1.default.writeInt8(bytes, trs.type, offset);
        buffer_1.default.writeInt32LE(bytes, trs.createdAt, offset);
        return Buffer.concat([
            bytes,
            Buffer.from(trs.salt, 'hex'),
            Buffer.from(trs.senderPublicKey, 'hex'),
            Buffer.from(!skipSignature && trs.signature ? trs.signature : '', 'hex'),
            Buffer.from(!skipSecondSignature && trs.secondSignature ? trs.secondSignature : '', 'hex'),
            assetBytes,
        ]);
    }
    getHash(trs) {
        return crypto_1.default.createHash('sha256').update(this.getBytes(trs)).digest();
    }
    getId(trs) {
        return this.getHash(trs).toString('hex');
    }
    sign(keyPair, trs) {
        return this.ed.sign(this.getHash(trs), keyPair).toString('hex');
    }
}
exports.TransactionCreator = TransactionCreator;
exports.transactionCreator = new TransactionCreator(ed_1.ed);
