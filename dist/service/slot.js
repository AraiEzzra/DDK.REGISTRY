"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const const_1 = require("../const");
const config_1 = require("../config");
class SlotService {
    constructor(epochTime, slotInterval) {
        this.epochTime = new Date(epochTime);
        this.slotInterval = slotInterval;
    }
    beginEpochTime() {
        return this.epochTime;
    }
    getEpochTime(time = Date.now()) {
        const d = this.beginEpochTime();
        const t = d.getTime();
        return Math.floor((time - t) / const_1.SECOND);
    }
    getTime(time) {
        return this.getEpochTime(time);
    }
    getRealTime(epochTime = this.getTime()) {
        return this.beginEpochTime().getTime() + epochTime * const_1.SECOND;
    }
    getSlotNumber(epochTime = this.getTime()) {
        return Math.floor(epochTime / this.slotInterval);
    }
    getSlotTime(slot) {
        return slot * this.slotInterval;
    }
    getSlotRealTime(slot) {
        const slotTime = slot * this.slotInterval;
        return this.getRealTime(slotTime);
    }
    getTruncTime() {
        return Math.floor(this.getTime() / this.slotInterval) *
            this.slotInterval;
    }
}
exports.SlotService = SlotService;
exports.slotService = new SlotService(config_1.CONFIG_DEFAULT.EPOCH_TIME, config_1.CONFIG_DEFAULT.SLOT_INTERVAL);
