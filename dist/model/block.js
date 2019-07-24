"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const clone_1 = require("../util/clone");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbW9kZWwvYmxvY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFHQSx5Q0FBc0M7QUFrQnRDLE1BQWEsS0FBSztJQWVkLFlBQVksSUFBaUI7UUFDekIsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUM1QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDaEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQzFCLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQztRQUM1QyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDO1FBQzlDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUMxQixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7UUFDcEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUM7UUFDbEQsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztRQUN0QyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFTSxPQUFPO1FBQ1YsT0FBTyxJQUFJLEtBQUssbUJBQ1QsYUFBSyxDQUFDLElBQUksQ0FBQyxJQUNkLFlBQVksRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUMzRSxDQUFDO0lBQ1AsQ0FBQztDQUNKO0FBckNELHNCQXFDQyJ9