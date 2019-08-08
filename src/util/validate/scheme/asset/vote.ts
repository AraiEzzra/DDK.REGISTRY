import { TransactionType } from '../../../../model/common/transaction/type';
import { VoteType } from '../../../../model/common/type';
import { CONFIG_DEFAULT } from '../../../../config';

export const ASSET_VOTE = {
    id: `ASSET.${TransactionType.VOTE}`,
    type: 'object',
    properties: {
        votes: {
            type: 'array',
            items: {
                type: 'string',
                format: 'publicKey',
            },
            maxItems: CONFIG_DEFAULT.MAX_VOTES_PER_TRANSACTION,
        },
        type: {
            type: 'string',
            enum: [
                VoteType.VOTE,
                VoteType.DOWN_VOTE,
            ],
        },
    },
    required: ['votes', 'type'],
};
