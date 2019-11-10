"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateUtf8BytesLength = (s) => {
    let b = 0, i = 0, c;
    for (; c = s.charCodeAt(i++); b += c >> 11 ? 3 : c >> 7 ? 2 : 1) { }
    return b;
};
