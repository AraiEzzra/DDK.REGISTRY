"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("../../../../model/common/transaction/type");
exports.ASSET_SEND = {
    id: `ASSET.${type_1.TransactionType.SEND}`,
    type: 'object',
    properties: {
        amount: {
            type: 'integer',
            minimum: 10000,
            maximum: 4500000000000000,
        },
        recipientAddress: {
            type: 'string',
            format: 'address',
        },
    },
    required: ['amount', 'recipientAddress'],
};
