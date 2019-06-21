import { Timestamp } from '../model/common/type';
export declare type EpochTime = number;
export default class SlotService {
    private epochTime;
    private slotInterval;
    constructor(epochTime: number, slotInterval: number);
    private beginEpochTime;
    private getEpochTime;
    getTime(time?: number): EpochTime;
    getRealTime(epochTime?: EpochTime): number;
    getSlotNumber(epochTime?: EpochTime): number;
    getSlotTime(slot: number): EpochTime;
    getSlotRealTime(slot: number): number;
    getTruncTime(): Timestamp;
}
