export declare const ASSET_SEND: {
    id: string;
    type: string;
    properties: {
        amount: {
            type: string;
            minimum: number;
            maximum: number;
        };
        recipientAddress: {
            type: string;
            format: string;
        };
    };
    required: string[];
};
