"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RoundModel {
    constructor(data) {
        this.slots = data.slots;
        this.lastBlockId = data.lastBlockId;
    }
}
exports.RoundModel = RoundModel;
class Round extends RoundModel {
}
exports.Round = Round;
