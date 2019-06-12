import { Slot } from './slot';

export type Slots = { [generatorPublicKey: string]: Slot };

export class RoundModel {
    slots: Slots;

    // For debugger
    lastBlockId?: string;

    constructor(data: RoundModel) {
        this.slots = data.slots;
        this.lastBlockId = data.lastBlockId;
    }
}

export class Round extends RoundModel {
}
