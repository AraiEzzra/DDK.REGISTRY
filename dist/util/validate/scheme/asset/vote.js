"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("../../../../model/common/transaction/type");
const type_2 = require("../../../../model/common/type");
const const_1 = require("../../../../const");
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
            maxItems: const_1.MAX_VOTES_PER_TRANSACTION,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidm90ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy91dGlsL3ZhbGlkYXRlL3NjaGVtZS9hc3NldC92b3RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsb0VBQTRFO0FBQzVFLHdEQUF5RDtBQUN6RCw2Q0FBOEQ7QUFFakQsUUFBQSxVQUFVLEdBQUc7SUFDdEIsRUFBRSxFQUFFLFNBQVMsc0JBQWUsQ0FBQyxJQUFJLEVBQUU7SUFDbkMsSUFBSSxFQUFFLFFBQVE7SUFDZCxVQUFVLEVBQUU7UUFDUixLQUFLLEVBQUU7WUFDSCxJQUFJLEVBQUUsT0FBTztZQUNiLEtBQUssRUFBRTtnQkFDSCxJQUFJLEVBQUUsUUFBUTtnQkFDZCxNQUFNLEVBQUUsV0FBVzthQUN0QjtZQUNELFFBQVEsRUFBRSxpQ0FBeUI7U0FDdEM7UUFDRCxJQUFJLEVBQUU7WUFDRixJQUFJLEVBQUUsUUFBUTtZQUNkLElBQUksRUFBRTtnQkFDRixlQUFRLENBQUMsSUFBSTtnQkFDYixlQUFRLENBQUMsU0FBUzthQUNyQjtTQUNKO0tBQ0o7SUFDRCxRQUFRLEVBQUUsQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDO0NBQzlCLENBQUMifQ==