import { TransactionType } from '../../../../model/common/transaction/type';

export const ASSET_REFERRAL = {
    id: `ASSET.${TransactionType.REFERRAL}`,
    type: 'object',
    properties: {
        referral: {
            type: 'string',
            format: 'address',
        },
    },
    required: ['referral'],
};
