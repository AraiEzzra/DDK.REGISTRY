"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("../../../../model/common/transaction/type");
exports.ASSET_REFERRAL = {
    id: `ASSET.${type_1.TransactionType.REFERRAL}`,
    type: 'object',
    properties: {
        referral: {
            type: 'string',
            format: 'address',
        },
    },
    required: ['referral'],
};
