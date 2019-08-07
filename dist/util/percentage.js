"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const const_1 = require("../const");
exports.getWholePercent = (obtained, total) => {
    return obtained / total * const_1.TOTAL_PERCENTAGE;
};
