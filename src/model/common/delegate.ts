import { PublicKey } from './type';

export type Delegate = {
    username: string;
    missedBlocks: number;
    forgedBlocks: number;
    publicKey: PublicKey;
    unconfirmedVoteCount: number;
    confirmedVoteCount: number;
};

export type ActiveDelegate = Delegate & {
    slotNumber: number,
};
