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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VuZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy91dGlsL3ZhbGlkYXRlL3NjaGVtZS9hc3NldC9zZW5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsb0VBQTRFO0FBRS9ELFFBQUEsVUFBVSxHQUFHO0lBQ3RCLEVBQUUsRUFBRSxTQUFTLHNCQUFlLENBQUMsSUFBSSxFQUFFO0lBQ25DLElBQUksRUFBRSxRQUFRO0lBQ2QsVUFBVSxFQUFFO1FBQ1IsTUFBTSxFQUFFO1lBQ0osSUFBSSxFQUFFLFNBQVM7WUFDZixPQUFPLEVBQUUsS0FBSztZQUNkLE9BQU8sRUFBRSxnQkFBZ0I7U0FDNUI7UUFDRCxnQkFBZ0IsRUFBRTtZQUNkLElBQUksRUFBRSxRQUFRO1lBQ2QsTUFBTSxFQUFFLFNBQVM7U0FDcEI7S0FDSjtJQUNELFFBQVEsRUFBRSxDQUFDLFFBQVEsRUFBRSxrQkFBa0IsQ0FBQztDQUMzQyxDQUFDIn0=