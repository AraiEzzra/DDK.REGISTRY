"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const buffer_1 = __importDefault(require("../util/buffer"));
exports.TRANSACTION_SALT_LENGTH = 16;
exports.TRANSACTION_BUFFER_SIZE = buffer_1.default.LENGTH.BYTE + // type
    buffer_1.default.LENGTH.UINT32; // createdAt
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNhY3Rpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdXRpbC90cmFuc2FjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDREQUFvQztBQUV2QixRQUFBLHVCQUF1QixHQUFHLEVBQUUsQ0FBQztBQUU3QixRQUFBLHVCQUF1QixHQUNoQyxnQkFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEdBQVUsT0FBTztJQUNuQyxnQkFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBTyxZQUFZIn0=