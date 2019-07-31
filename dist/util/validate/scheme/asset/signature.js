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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbmF0dXJlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL3V0aWwvdmFsaWRhdGUvc2NoZW1lL2Fzc2V0L3NpZ25hdHVyZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG9FQUE0RTtBQUUvRCxRQUFBLGVBQWUsR0FBRztJQUMzQixFQUFFLEVBQUUsU0FBUyxzQkFBZSxDQUFDLFNBQVMsRUFBRTtJQUN4QyxJQUFJLEVBQUUsUUFBUTtJQUNkLFVBQVUsRUFBRTtRQUNSLFNBQVMsRUFBRTtZQUNQLElBQUksRUFBRSxRQUFRO1lBQ2QsTUFBTSxFQUFFLFdBQVc7U0FDdEI7S0FDSjtJQUNELFFBQVEsRUFBRSxDQUFDLFdBQVcsQ0FBQztDQUMxQixDQUFDIn0=