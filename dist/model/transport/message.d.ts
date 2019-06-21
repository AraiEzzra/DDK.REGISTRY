import { API_ACTION_TYPES } from './code';
import { EVENT_TYPES } from './event';
export declare enum MessageType {
    REQUEST = 1,
    RESPONSE = 2,
    EVENT = 3
}
export declare class Message<Body> {
    code: EVENT_TYPES | API_ACTION_TYPES;
    headers: {
        id: string;
        type: MessageType;
    };
    body: Body;
    constructor(type: MessageType, code: EVENT_TYPES | API_ACTION_TYPES, body: any, id?: string);
}
