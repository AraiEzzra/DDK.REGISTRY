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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbW9kZWwvY29tbW9uL3RyYW5zYWN0aW9uL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsb0RBQTRCO0FBSTVCLHFDQUE2QztBQUU3QyxtREFBOEQ7QUFDOUQsK0NBQTRDO0FBQzVDLDJEQUFvRTtBQW1CcEUsTUFBYSxXQUFXO0lBZ0JwQixZQUFZLElBQTBCO1FBQ2xDLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDNUIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQztRQUM1QyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDaEMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDO1FBQzVDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUNoQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDeEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxJQUFJLGdCQUFNLENBQUMsV0FBVyxDQUFDLHFDQUF1QixDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JGLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGFBQWEsSUFBSSxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztRQUN6QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sSUFBSSwwQkFBaUIsQ0FBQyxPQUFPLENBQUM7UUFDdkQsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsYUFBYSxJQUFJLCtCQUFxQixDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUMzRixDQUFDO0lBRU0sT0FBTztRQUNWLE9BQU8sSUFBSSxXQUFXLG1CQUNmLGFBQUssQ0FBQyxJQUFJLENBQUMsSUFDZCxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsSUFDN0IsQ0FBQztJQUNQLENBQUM7Q0FDSjtBQXZDRCxrQ0F1Q0MifQ==