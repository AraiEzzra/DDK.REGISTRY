"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const account_1 = require("../../util/account");
class Account {
    constructor(data) {
        this.publicKey = data.publicKey;
        this.actualBalance = data.actualBalance || 0;
        this.address = data.address || account_1.getAddressByPublicKey(data.publicKey);
        this.secondPublicKey = data.secondPublicKey;
        this.delegate = data.delegate;
        this.votes = data.votes || [];
        this.referrals = data.referrals || [];
        this.stakes = data.stakes || [];
    }
}
exports.Account = Account;
