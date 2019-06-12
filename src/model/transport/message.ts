import uuid from 'uuidv4';

import { API_ACTION_TYPES } from './code';
import { EVENT_TYPES } from './event';

export enum MessageType {
    REQUEST = 1,
    RESPONSE = 2,
    EVENT = 3,
}

export class Message<Body> {
    public code: EVENT_TYPES | API_ACTION_TYPES;
    public headers: {
        id: string;
        type: MessageType;
    };
    public body: Body;

    constructor(type: MessageType, code: EVENT_TYPES | API_ACTION_TYPES, body: any, id? : string) {
        this.code = code;
        this.headers = {
            id: id || uuid(),
            type,
        };
        this.body = body;
    }
}
