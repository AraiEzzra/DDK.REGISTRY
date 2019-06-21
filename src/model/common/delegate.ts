import { PublicKey } from './type';

export type Delegate = {
    username: string;
    missedBlocks: number;
    forgedBlocks: number;
    publicKey: PublicKey;
    unconfirmedVoteCount: number;
    confirmedVoteCount: number;
};

export enum ForgeStatus {
    WAITING = 'WAITING',
    FORGING = 'FORGING',
    FORGED = 'FORGED',
    MISSED = 'MISSED',
}

export type ActiveDelegate = Delegate & {
    slotNumber: number,
    status: ForgeStatus,
};
