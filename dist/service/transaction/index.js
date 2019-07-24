"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = __importDefault(require("crypto"));
const transaction_1 = require("../../model/common/transaction");
const ed_1 = require("../../util/ed");
const type_1 = require("../../model/common/transaction/type");
const responseEntity_1 = require("../../model/responseEntity");
const account_1 = require("../../util/account");
const buffer_1 = __importDefault(require("../../util/buffer"));
const transaction_2 = require("../../util/transaction");
class TransactionCreator {
    constructor(_ed) {
        this.ed = _ed;
    }
    create(params) {
        const { data, sender, keyPair, secondKeyPair } = params;
        const errors = [];
        if (!type_1.TransactionType[data.type]) {
            errors.push(`Unknown transaction type ${data.type}`);
            return new responseEntity_1.ResponseEntity({ errors });
        }
        const transaction = Object.assign({}, data, { senderAddress: account_1.getAddressByPublicKey(data.senderPublicKey), fee: data.asset.calculateFee(sender) });
        transaction.signature = this.sign(keyPair, transaction);
        if (secondKeyPair) {
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
exports.default = new TransactionCreator(ed_1.ed);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvc2VydmljZS90cmFuc2FjdGlvbi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLG9EQUE0QjtBQUU1QixnRUFBZ0Y7QUFDaEYsc0NBQWlEO0FBQ2pELDhEQUFzRTtBQUN0RSwrREFBNEQ7QUFDNUQsZ0RBQTJEO0FBQzNELCtEQUF1QztBQUN2Qyx3REFBaUU7QUFnQmpFLE1BQWEsa0JBQWtCO0lBRzNCLFlBQVksR0FBTztRQUNmLElBQUksQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDO0lBQ2xCLENBQUM7SUFFRCxNQUFNLENBQUMsTUFBK0I7UUFDbEMsTUFBTSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxHQUFHLE1BQU0sQ0FBQztRQUN4RCxNQUFNLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFFbEIsSUFBSSxDQUFDLHNCQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQzdCLE1BQU0sQ0FBQyxJQUFJLENBQUMsNEJBQTRCLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1lBQ3JELE9BQU8sSUFBSSwrQkFBYyxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztTQUN6QztRQUVELE1BQU0sV0FBVyxxQkFDVixJQUFJLElBQ1AsYUFBYSxFQUFFLCtCQUFxQixDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsRUFDMUQsR0FBRyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxHQUN2QyxDQUFDO1FBQ0YsV0FBVyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxXQUFXLENBQUMsQ0FBQztRQUN4RCxJQUFJLGFBQWEsRUFBRTtZQUNmLFdBQVcsQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsV0FBVyxDQUFDLENBQUM7U0FDdkU7UUFDRCxXQUFXLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7UUFFekMsT0FBTyxJQUFJLCtCQUFjLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSx5QkFBVyxDQUFNLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUMzRSxDQUFDO0lBRUQsUUFBUSxDQUNKLEdBQTZCLEVBQzdCLGdCQUF5QixLQUFLLEVBQzlCLHNCQUErQixLQUFLO1FBRXBDLE1BQU0sVUFBVSxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7UUFFeEMsTUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxxQ0FBdUIsQ0FBQyxDQUFDO1FBQ3BELElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQztRQUVmLE1BQU0sR0FBRyxnQkFBTSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztRQUNuRCxnQkFBTSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUVsRCxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUM7WUFDakIsS0FBSztZQUNMLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUM7WUFDNUIsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLEtBQUssQ0FBQztZQUN2QyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsYUFBYSxJQUFJLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxLQUFLLENBQUM7WUFDeEUsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLG1CQUFtQixJQUFJLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxLQUFLLENBQUM7WUFDMUYsVUFBVTtTQUNiLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxPQUFPLENBQUMsR0FBNkI7UUFDakMsT0FBTyxnQkFBTSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQzNFLENBQUM7SUFFRCxLQUFLLENBQUMsR0FBMkI7UUFDN0IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRU8sSUFBSSxDQUFDLE9BQWlCLEVBQUUsR0FBNkI7UUFDekQsT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNwRSxDQUFDO0NBQ0o7QUFoRUQsZ0RBZ0VDO0FBRUQsa0JBQWUsSUFBSSxrQkFBa0IsQ0FBQyxPQUFFLENBQUMsQ0FBQyJ9