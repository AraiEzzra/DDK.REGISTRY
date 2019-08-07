"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("../../../../model/common/transaction/type");
exports.ASSET_STAKE = {
    id: `ASSET.${type_1.TransactionType.STAKE}`,
    type: 'object',
    properties: {
        amount: {
            type: 'integer',
            minimum: 100000000,
            maximum: 4500000000000000,
        },
    },
    required: ['amount'],
};
