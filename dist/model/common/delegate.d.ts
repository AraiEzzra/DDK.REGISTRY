import { PublicKey } from './type';
export declare type Delegate = {
    username: string;
    missedBlocks: number;
    forgedBlocks: number;
    publicKey: PublicKey;
    unconfirmedVoteCount: number;
    confirmedVoteCount: number;
};
export declare enum ForgeStatus {
    WAITING = "WAITING",
    FORGING = "FORGING",
    FORGED = "FORGED",
    MISSED = "MISSED"
}
export declare type ActiveDelegate = Delegate & {
    slotNumber: number;
    status: ForgeStatus;
};
