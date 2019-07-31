import { VoteType } from '../../../../model/common/type';
export declare const ASSET_VOTE: {
    id: string;
    type: string;
    properties: {
        votes: {
            type: string;
            items: {
                type: string;
                format: string;
            };
            maxItems: number;
        };
        type: {
            type: string;
            enum: VoteType[];
        };
    };
    required: string[];
};
