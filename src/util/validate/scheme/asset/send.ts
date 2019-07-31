import { TransactionType } from '../../../../model/common/transaction/type';

export const ASSET_SEND = {
    id: `ASSET.${TransactionType.SEND}`,
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
