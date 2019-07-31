import { TransactionType } from '../../../../model/common/transaction/type';

export const ASSET_SIGNATURE = {
    id: `ASSET.${TransactionType.SIGNATURE}`,
    type: 'object',
    properties: {
        publicKey: {
            type: 'string',
            format: 'publicKey',
        },
    },
    required: ['publicKey'],
};
