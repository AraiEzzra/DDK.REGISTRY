"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
const const_1 = require("../../../../const");
const clone_1 = require("../../../../util/clone");
const buffer_1 = __importDefault(require("../../../../util/buffer"));
class AssetSend extends _1.Asset {
    constructor(data) {
        super();
        this.recipientAddress = data.recipientAddress;
        this.amount = data.amount;
    }
    getCopy() {
        return new AssetSend(clone_1.clone(this));
    }
    getBytes() {
        const buff = Buffer.alloc(buffer_1.default.LENGTH.INT64 + // recipientAddress
            buffer_1.default.LENGTH.INT64 // amount
        );
        let offset = buffer_1.default.writeUInt64LE(buff, this.recipientAddress, 0);
        buffer_1.default.writeUInt64LE(buff, this.amount, offset);
        return buff;
    }
    calculateFee() {
        return this.amount * const_1.FEES.SEND;
    }
}
exports.AssetSend = AssetSend;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VuZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9tb2RlbC9jb21tb24vdHJhbnNhY3Rpb24vYXNzZXQvc2VuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLHdCQUEwQjtBQUMxQiw2Q0FBeUM7QUFDekMsa0RBQStDO0FBQy9DLHFFQUE2QztBQU83QyxNQUFhLFNBQVUsU0FBUSxRQUFLO0lBSWhDLFlBQVksSUFBcUI7UUFDN0IsS0FBSyxFQUFFLENBQUM7UUFFUixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDO1FBQzlDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUM5QixDQUFDO0lBRUQsT0FBTztRQUNILE9BQU8sSUFBSSxTQUFTLENBQUMsYUFBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVELFFBQVE7UUFDSixNQUFNLElBQUksR0FBRyxNQUFNLENBQUMsS0FBSyxDQUNyQixnQkFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsbUJBQW1CO1lBQ3pDLGdCQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBRSxTQUFTO1NBQ2pDLENBQUM7UUFDRixJQUFJLE1BQU0sR0FBRyxnQkFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2xFLGdCQUFNLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ2hELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFRCxZQUFZO1FBQ1IsT0FBTyxJQUFJLENBQUMsTUFBTSxHQUFHLFlBQUksQ0FBQyxJQUFJLENBQUM7SUFDbkMsQ0FBQztDQUNKO0FBNUJELDhCQTRCQyJ9