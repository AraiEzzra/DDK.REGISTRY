"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TransactionStatus;
(function (TransactionStatus) {
    TransactionStatus[TransactionStatus["CREATED"] = 0] = "CREATED";
    TransactionStatus[TransactionStatus["QUEUED"] = 1] = "QUEUED";
    TransactionStatus[TransactionStatus["PROCESSED"] = 2] = "PROCESSED";
    TransactionStatus[TransactionStatus["QUEUED_AS_CONFLICTED"] = 3] = "QUEUED_AS_CONFLICTED";
    TransactionStatus[TransactionStatus["VERIFIED"] = 4] = "VERIFIED";
    TransactionStatus[TransactionStatus["UNCONFIRM_APPLIED"] = 5] = "UNCONFIRM_APPLIED";
    TransactionStatus[TransactionStatus["PUT_IN_POOL"] = 6] = "PUT_IN_POOL";
    TransactionStatus[TransactionStatus["BROADCASTED"] = 7] = "BROADCASTED";
    TransactionStatus[TransactionStatus["APPLIED"] = 8] = "APPLIED";
    TransactionStatus[TransactionStatus["DECLINED"] = 9] = "DECLINED";
})(TransactionStatus = exports.TransactionStatus || (exports.TransactionStatus = {}));
