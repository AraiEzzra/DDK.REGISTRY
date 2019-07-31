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
        this.getId = () => this.headers.id;
        this.getBody = () => this.body;
        this.getCode = () => this.code;
        this.serialize = () => {
            return {
                code: this.code,
                headers: this.headers,
                body: this.body,
            };
        };
        this.code = code;
        this.headers = {
            id: id || uuidv4_1.default(),
            type,
        };
        this.body = body;
    }
}
Message.deserialize = (message) => {
    return new Message(message.headers.type, message.code, message.body, message.headers.id);
};
exports.default = Message;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2RlbC90cmFuc3BvcnQvbWVzc2FnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLG9EQUEwQjtBQUUxQixJQUFZLFdBSVg7QUFKRCxXQUFZLFdBQVc7SUFDbkIsbURBQVcsQ0FBQTtJQUNYLHFEQUFRLENBQUE7SUFDUiwrQ0FBSyxDQUFBO0FBQ1QsQ0FBQyxFQUpXLFdBQVcsR0FBWCxtQkFBVyxLQUFYLG1CQUFXLFFBSXRCO0FBV0QsTUFBcUIsT0FBTztJQVF4QixZQUFZLElBQWlCLEVBQUUsSUFBVSxFQUFFLElBQVUsRUFBRSxFQUFXO1FBUzNELFVBQUssR0FBRyxHQUFXLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztRQUN0QyxZQUFPLEdBQUcsR0FBUyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUNoQyxZQUFPLEdBQUcsR0FBUyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUVoQyxjQUFTLEdBQUcsR0FBOEIsRUFBRTtZQUMvQyxPQUFPO2dCQUNILElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtnQkFDZixPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87Z0JBQ3JCLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTthQUNsQixDQUFDO1FBQ04sQ0FBQyxDQUFBO1FBbEJHLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxPQUFPLEdBQUc7WUFDWCxFQUFFLEVBQUUsRUFBRSxJQUFJLGdCQUFJLEVBQUU7WUFDaEIsSUFBSTtTQUNQLENBQUM7UUFDRixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNyQixDQUFDOztBQWNNLG1CQUFXLEdBQUcsQ0FBQyxPQUFnQyxFQUFxQixFQUFFO0lBQ3pFLE9BQU8sSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDN0YsQ0FBQyxDQUFBO0FBL0JMLDBCQWdDQyJ9