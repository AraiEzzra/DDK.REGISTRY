"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("../../../../model/common/transaction/type");
exports.ASSET_SIGNATURE = {
    id: `ASSET.${type_1.TransactionType.SIGNATURE}`,
    type: 'object',
    properties: {
        publicKey: {
            type: 'string',
            format: 'publicKey',
        },
    },
    required: ['publicKey'],
};
