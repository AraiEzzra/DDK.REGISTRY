import crypto from 'crypto';

import { PublicKey } from '../model/common/type';
import { ADDRESS_BYTES_LENGTH } from '../const';
import { bufferToHex } from './buffer';
import { Address } from '../model/common/address';

export const getAddressByPublicKey = (publicKey: PublicKey): Address => {
    // @ts-ignore
    const publicKeyHash = crypto.createHash('sha256').update(publicKey, 'hex').digest();
    const temp = Buffer.allocUnsafe(ADDRESS_BYTES_LENGTH);
    for (let i = 0; i < ADDRESS_BYTES_LENGTH; i++) {
        temp[i] = publicKeyHash[ADDRESS_BYTES_LENGTH - 1 - i];
    }
    return new Address(bufferToHex(temp).toString());
};
