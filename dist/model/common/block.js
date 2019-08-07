"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const clone_1 = require("../../util/clone");
class Block {
    constructor(data) {
        this.id = data.id;
        this.version = data.version;
        this.createdAt = data.createdAt;
        this.height = data.height;
        this.previousBlockId = data.previousBlockId;
        this.transactionCount = data.transactionCount;
        this.amount = data.amount;
        this.fee = data.fee;
        this.payloadHash = data.payloadHash;
        this.generatorPublicKey = data.generatorPublicKey;
        this.signature = data.signature;
        this.transactions = data.transactions;
        this.relay = data.relay || 0;
    }
    getCopy() {
        return new Block(Object.assign({}, clone_1.clone(this), { transactions: this.transactions.map(transaction => transaction.getCopy()) }));
    }
}
exports.Block = Block;
