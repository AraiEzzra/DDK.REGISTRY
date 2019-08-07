"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = __importDefault(require("crypto"));
const status_1 = require("./status");
const account_1 = require("../../../util/account");
const clone_1 = require("../../../util/clone");
const transaction_1 = require("../../../util/transaction");
class Transaction {
    constructor(data) {
        this.id = data.id;
        this.blockId = data.blockId;
        this.type = data.type;
        this.senderPublicKey = data.senderPublicKey;
        this.signature = data.signature;
        this.secondSignature = data.secondSignature;
        this.createdAt = data.createdAt;
        this.asset = data.asset;
        this.salt = data.salt || crypto_1.default.randomBytes(transaction_1.TRANSACTION_SALT_LENGTH).toString('hex');
        this.confirmations = data.confirmations || 0;
        this.fee = data.fee || 0;
        this.relay = data.relay || 0;
        this.status = data.status || status_1.TransactionStatus.CREATED;
        this.senderAddress = data.senderAddress || account_1.getAddressByPublicKey(data.senderPublicKey);
    }
    getCopy() {
        return new Transaction(Object.assign({}, clone_1.clone(this), { asset: this.asset.getCopy() }));
    }
}
exports.Transaction = Transaction;
