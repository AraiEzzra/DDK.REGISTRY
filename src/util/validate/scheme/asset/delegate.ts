import { TransactionType } from '../../../../model/common/transaction/type';

export const ASSET_DELEGATE = {
    id: `ASSET.${TransactionType.DELEGATE}`,
    type: 'object',
    properties: {
        username: {
            type: 'string',
            format: 'username',
        },
    },
    required: ['username'],
};
