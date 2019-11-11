import crypto from 'crypto';

import { PublicKey, Address } from '../model/common/type';
import { ADDRESS_BYTES_LENGTH } from '../const';
import { bufferToHex } from './buffer';

export const getAddressByPublicKey = (publicKey: PublicKey): Address => {
    // @ts-ignore
    const publicKeyHash = crypto.createHash('sha256').update(publicKey, 'hex').digest();
    const temp = Buffer.allocUnsafe(ADDRESS_BYTES_LENGTH);
    for (let i = 0; i < ADDRESS_BYTES_LENGTH; i++) {
        temp[i] = publicKeyHash[ADDRESS_BYTES_LENGTH - 1 - i];
    }
    return BigInt(bufferToHex(temp).toString());
};
