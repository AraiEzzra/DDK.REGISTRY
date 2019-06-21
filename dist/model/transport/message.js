"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const uuidv4_1 = __importDefault(require("uuidv4"));
var MessageType;
(function (MessageType) {
    MessageType[MessageType["REQUEST"] = 1] = "REQUEST";
    MessageType[MessageType["RESPONSE"] = 2] = "RESPONSE";
    MessageType[MessageType["EVENT"] = 3] = "EVENT";
})(MessageType = exports.MessageType || (exports.MessageType = {}));
class Message {
    constructor(type, code, body, id) {
        this.code = code;
        this.headers = {
            id: id || uuidv4_1.default(),
            type,
        };
        this.body = body;
    }
}
exports.Message = Message;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2RlbC90cmFuc3BvcnQvbWVzc2FnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLG9EQUEwQjtBQUsxQixJQUFZLFdBSVg7QUFKRCxXQUFZLFdBQVc7SUFDbkIsbURBQVcsQ0FBQTtJQUNYLHFEQUFZLENBQUE7SUFDWiwrQ0FBUyxDQUFBO0FBQ2IsQ0FBQyxFQUpXLFdBQVcsR0FBWCxtQkFBVyxLQUFYLG1CQUFXLFFBSXRCO0FBRUQsTUFBYSxPQUFPO0lBUWhCLFlBQVksSUFBaUIsRUFBRSxJQUFvQyxFQUFFLElBQVMsRUFBRSxFQUFZO1FBQ3hGLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxPQUFPLEdBQUc7WUFDWCxFQUFFLEVBQUUsRUFBRSxJQUFJLGdCQUFJLEVBQUU7WUFDaEIsSUFBSTtTQUNQLENBQUM7UUFDRixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNyQixDQUFDO0NBQ0o7QUFoQkQsMEJBZ0JDIn0=