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
exports.default = SlotService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xvdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZXJ2aWNlL3Nsb3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxvQ0FBa0M7QUFJbEMsTUFBcUIsV0FBVztJQUk1QixZQUFZLFNBQWlCLEVBQUUsWUFBb0I7UUFDL0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztJQUNyQyxDQUFDO0lBRU8sY0FBYztRQUNsQixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDMUIsQ0FBQztJQUVPLFlBQVksQ0FBQyxPQUFlLElBQUksQ0FBQyxHQUFHLEVBQUU7UUFDMUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ2hDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUV0QixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLEdBQUcsY0FBTSxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVNLE9BQU8sQ0FBQyxJQUFhO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRU0sV0FBVyxDQUFDLFlBQXVCLElBQUksQ0FBQyxPQUFPLEVBQUU7UUFDcEQsT0FBTyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsT0FBTyxFQUFFLEdBQUcsU0FBUyxHQUFHLGNBQU0sQ0FBQztJQUNoRSxDQUFDO0lBRU0sYUFBYSxDQUFDLFlBQXVCLElBQUksQ0FBQyxPQUFPLEVBQUU7UUFDdEQsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUVNLFdBQVcsQ0FBQyxJQUFZO1FBQzNCLE9BQU8sSUFBSSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDcEMsQ0FBQztJQUVNLGVBQWUsQ0FBQyxJQUFZO1FBQy9CLE1BQU0sUUFBUSxHQUFHLElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQzFDLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRU0sWUFBWTtRQUNmLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUNqRCxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzFCLENBQUM7Q0FDSjtBQTdDRCw4QkE2Q0MifQ==