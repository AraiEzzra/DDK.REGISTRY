"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const const_1 = require("../const");
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
exports.slotService = new SlotService(const_1.EPOCH_TIME, const_1.SLOT_INTERVAL);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xvdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZXJ2aWNlL3Nsb3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxvQ0FBNkQ7QUFFN0QsTUFBYSxXQUFXO0lBSXBCLFlBQVksU0FBaUIsRUFBRSxZQUFvQjtRQUMvQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO0lBQ3JDLENBQUM7SUFFTyxjQUFjO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUMxQixDQUFDO0lBRU8sWUFBWSxDQUFDLE9BQWUsSUFBSSxDQUFDLEdBQUcsRUFBRTtRQUMxQyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDaEMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBRXRCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsR0FBRyxjQUFNLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRU0sT0FBTyxDQUFDLElBQWE7UUFDeEIsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFTSxXQUFXLENBQUMsWUFBdUIsSUFBSSxDQUFDLE9BQU8sRUFBRTtRQUNwRCxPQUFPLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxPQUFPLEVBQUUsR0FBRyxTQUFTLEdBQUcsY0FBTSxDQUFDO0lBQ2hFLENBQUM7SUFFTSxhQUFhLENBQUMsWUFBdUIsSUFBSSxDQUFDLE9BQU8sRUFBRTtRQUN0RCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRU0sV0FBVyxDQUFDLElBQVk7UUFDM0IsT0FBTyxJQUFJLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztJQUNwQyxDQUFDO0lBRU0sZUFBZSxDQUFDLElBQVk7UUFDL0IsTUFBTSxRQUFRLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDMUMsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFTSxZQUFZO1FBQ2YsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2pELElBQUksQ0FBQyxZQUFZLENBQUM7SUFDMUIsQ0FBQztDQUNKO0FBN0NELGtDQTZDQztBQUVZLFFBQUEsV0FBVyxHQUFHLElBQUksV0FBVyxDQUFDLGtCQUFVLEVBQUUscUJBQWEsQ0FBQyxDQUFDIn0=