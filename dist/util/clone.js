"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clone = (data) => {
    let copy;
    if (data == null || typeof data !== 'object') {
        return data;
    }
    if (typeof data === 'function') {
        return undefined;
    }
    if (data instanceof Date) {
        copy = new Date();
        copy.setTime(data.getTime());
        return copy;
    }
    if (data instanceof Array) {
        copy = [];
        for (let i = 0, len = data.length; i < len; i++) {
            copy[i] = exports.clone(data[i]);
        }
        return copy;
    }
    if (data instanceof Object) {
        copy = {};
        for (const attr in data) {
            if (data.hasOwnProperty(attr)) {
                copy[attr] = exports.clone(data[attr]);
            }
        }
        return copy;
    }
    throw new Error('Unable to copy data! Its type isn\'t supported.');
};
