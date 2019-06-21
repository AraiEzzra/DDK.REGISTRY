import { Slot } from './slot';
export declare type Slots = {
    [generatorPublicKey: string]: Slot;
};
export declare class RoundModel {
    slots: Slots;
    lastBlockId?: string;
    constructor(data: RoundModel);
}
export declare class Round extends RoundModel {
}
