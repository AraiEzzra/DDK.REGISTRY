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
