"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TransactionType;
(function (TransactionType) {
    TransactionType[TransactionType["REFERRAL"] = 0] = "REFERRAL";
    TransactionType[TransactionType["SEND"] = 10] = "SEND";
    TransactionType[TransactionType["SIGNATURE"] = 20] = "SIGNATURE";
    TransactionType[TransactionType["DELEGATE"] = 30] = "DELEGATE";
    TransactionType[TransactionType["STAKE"] = 40] = "STAKE";
    TransactionType[TransactionType["SENDSTAKE"] = 50] = "SENDSTAKE";
    TransactionType[TransactionType["VOTE"] = 60] = "VOTE";
})(TransactionType = exports.TransactionType || (exports.TransactionType = {}));
