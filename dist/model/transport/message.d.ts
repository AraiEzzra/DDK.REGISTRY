export declare enum MessageType {
    REQUEST = 1,
    RESPONSE = 2,
    EVENT = 3
}
export declare type MessageSchema<Body, Code> = {
    code: Code;
    headers: {
        id: string;
        type: MessageType;
    };
    body: Body;
};
export default class Message<Body, Code> implements MessageSchema<Body, Code> {
    code: Code;
    headers: {
        id: string;
        type: MessageType;
    };
    body: Body;
    constructor(type: MessageType, code: Code, body: Body, id?: string);
    getId: () => string;
    getBody: () => Body;
    getCode: () => Code;
    serialize: () => MessageSchema<Body, Code>;
    static deserialize: (message: MessageSchema<any, any>) => Message<any, any>;
}
