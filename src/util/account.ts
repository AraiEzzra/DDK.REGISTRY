import crypto from 'crypto';

import { PublicKey, Address } from '../model/common/type';

const ADDRESS_LENGTH = 8;
const HEXADECIMAL = 16;

const getBodyAddress = (buf: Buffer): string => {
    const hex = [];
    for (let i = 0; i < buf.length; i++) {
        const c = (buf[i] < HEXADECIMAL ? '0' : '') + buf[i].toString(HEXADECIMAL);
        hex.push(c);
    }
    return `0x${hex.join('')}`;
};

export const getAddressByPublicKey = (publicKey: PublicKey): Address => {
    // @ts-ignore
    const publicKeyHash = crypto.createHash('sha256').update(publicKey, 'hex').digest();
    const temp = Buffer.alloc(ADDRESS_LENGTH);
    for (let i = 0; i < ADDRESS_LENGTH; i++) {
        temp[i] = publicKeyHash[ADDRESS_LENGTH - 1 - i];
    }
    return BigInt(getBodyAddress(temp).toString());
};
