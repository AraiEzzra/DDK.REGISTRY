import { TransactionType } from '../../../../model/common/transaction/type';

export const ASSET_STAKE = {
    id: `ASSET.${TransactionType.STAKE}`,
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
