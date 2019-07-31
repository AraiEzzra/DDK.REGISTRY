import { Timestamp, EpochTime } from '../model/common/type';
import { SECOND, EPOCH_TIME, SLOT_INTERVAL } from '../const';

export class SlotService {
    private epochTime: Date;
    private slotInterval: number;

    constructor(epochTime: number, slotInterval: number) {
        this.epochTime = new Date(epochTime);
        this.slotInterval = slotInterval;
    }

    private beginEpochTime(): Date {
        return this.epochTime;
    }

    private getEpochTime(time: number = Date.now()): EpochTime {
        const d = this.beginEpochTime();
        const t = d.getTime();

        return Math.floor((time - t) / SECOND);
    }

    public getTime(time?: number): EpochTime {
        return this.getEpochTime(time);
    }

    public getRealTime(epochTime: EpochTime = this.getTime()): number {
        return this.beginEpochTime().getTime() + epochTime * SECOND;
    }

    public getSlotNumber(epochTime: EpochTime = this.getTime()): number {
        return Math.floor(epochTime / this.slotInterval);
    }

    public getSlotTime(slot: number): EpochTime {
        return slot * this.slotInterval;
    }

    public getSlotRealTime(slot: number): number {
        const slotTime = slot * this.slotInterval;
        return this.getRealTime(slotTime);
    }

    public getTruncTime(): Timestamp {
        return Math.floor(this.getTime() / this.slotInterval) *
            this.slotInterval;
    }
}

export const slotService = new SlotService(EPOCH_TIME, SLOT_INTERVAL);
