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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvc2VydmljZS90cmFuc2FjdGlvbi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLG9EQUE0QjtBQUU1QixnRUFBZ0Y7QUFDaEYsc0NBQWlEO0FBQ2pELDhEQUFzRTtBQUN0RSxzRUFBbUU7QUFDbkUsZ0RBQTJEO0FBQzNELCtEQUF1QztBQUN2Qyx3REFBaUU7QUFHakUsdUNBQTBDO0FBQzFDLDhDQUEwRDtBQUMxRCxrQ0FBc0M7QUFjdEMsTUFBYSxrQkFBa0I7SUFHM0IsWUFBWSxHQUFPO1FBQ2YsSUFBSSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUM7SUFDbEIsQ0FBQztJQUVELE1BQU0sQ0FBQyxNQUErQjtRQUNsQyxNQUFNLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLEdBQUcsTUFBTSxDQUFDO1FBQ3RELE1BQU0sT0FBTyxHQUFHLDhCQUFxQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzlDLE1BQU0sTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUVsQixJQUFJLENBQUMsc0JBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDN0IsTUFBTSxDQUFDLElBQUksQ0FBQyw0QkFBNEIsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7WUFDckQsT0FBTyxJQUFJLCtCQUFjLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO1NBQ3pDO1FBRUQsTUFBTSxlQUFlLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDMUQsTUFBTSxXQUFXLHFCQUNWLElBQUksSUFDUCxlQUFlLEVBQ2YsYUFBYSxFQUFFLCtCQUFxQixDQUFDLGVBQWUsQ0FBQyxFQUNyRCxHQUFHLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEdBQ3ZDLENB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