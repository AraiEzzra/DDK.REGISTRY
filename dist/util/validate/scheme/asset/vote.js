"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("../../../../model/common/transaction/type");
const type_2 = require("../../../../model/common/type");
const config_1 = require("../../../../config");
exports.ASSET_VOTE = {
    id: `ASSET.${type_1.TransactionType.VOTE}`,
    type: 'object',
    properties: {
        votes: {
            type: 'array',
            items: {
                type: 'string',
                format: 'publicKey',
            },
            maxItems: config_1.CONFIG_DEFAULT.MAX_VOTES_PER_TRANSACTION,
        },
        type: {
            type: 'string',
            enum: [
                type_2.VoteType.VOTE,
                type_2.VoteType.DOWN_VOTE,
            ],
        },
    },
    required: ['votes', 'type'],
};
