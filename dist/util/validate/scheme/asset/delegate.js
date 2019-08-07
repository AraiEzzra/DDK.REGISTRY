"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("../../../../model/common/transaction/type");
exports.ASSET_DELEGATE = {
    id: `ASSET.${type_1.TransactionType.DELEGATE}`,
    type: 'object',
    properties: {
        username: {
            type: 'string',
            format: 'username',
        },
    },
    required: ['username'],
};
