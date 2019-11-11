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
const transaction_2 = require("../../util/transaction");
const crypto_2 = require("../../util/crypto");
const slot_1 = require("../slot");
const config_1 = require("../../config");
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
            transaction.salt = crypto_1.default.randomBytes(config_1.CONFIG_DEFAULT.SALT_LENGTH).toString('hex');
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
        let bufferSize = transaction_2.TRANSACTION_BUFFER_SIZE + trs.asset.getBufferSize();
        if (!skipSignature && trs.signature) {
            bufferSize += transaction_2.SIGNATURE_LENGTH;
        }
        if (!skipSecondSignature && trs.secondSignature) {
            bufferSize += transaction_2.SIGNATURE_LENGTH;
        }
        const bytes = Buffer.allocUnsafe(bufferSize);
        let offset = 0;
        offset = bytes.writeInt8(trs.type, offset);
        offset = bytes.writeUInt32LE(trs.createdAt, offset);
        offset += bytes.write(trs.salt, offset, 'hex');
        offset += bytes.write(trs.senderPublicKey, offset, 'hex');
        if (!skipSignature && trs.signature) {
            offset += bytes.write(trs.signature, offset, 'hex');
        }
        if (!skipSecondSignature && trs.secondSignature) {
            offset += bytes.write(trs.secondSignature, offset, 'hex');
        }
        trs.asset.writeBytes(bytes, offset);
        return bytes;
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
