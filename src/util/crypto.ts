import crypto from 'crypto';

import { ed } from './ed';
import { IKeyPair } from '../model/common/keyPair';

export const createKeyPairBySecret = (secret: string): IKeyPair => {
    const hash = crypto.createHash('sha256').update(secret, 'utf8').digest();

    return ed.makeKeyPair(hash);
};
