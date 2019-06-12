import { Delegate } from '../../common/delegate';

export type SerializedRound = Array<{
    slotNumber: number,
    delegate: Delegate,
}>;
