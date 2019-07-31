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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbW9kZWwvY29tbW9uL2Jsb2NrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBR0EsNENBQXlDO0FBa0J6QyxNQUFhLEtBQUs7SUFlZCxZQUFZLElBQWlCO1FBQ3pCLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDNUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUMxQixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUM7UUFDNUMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztRQUM5QyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDMUIsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUNwQyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDO1FBQ2xELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUNoQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDdEMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRU0sT0FBTztRQUNWLE9BQU8sSUFBSSxLQUFLLG1CQUNULGFBQUssQ0FBQyxJQUFJLENBQUMsSUFDZCxZQUFZLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUMsSUFDM0UsQ0FBQztJQUNQLENBQUM7Q0FDSjtBQXJDRCxzQkFxQ0MifQ==