import Validator from 'z-schema';
import Mnemonic from 'bitcore-mnemonic';

import { PublicKey, VoteType, LENGTH } from '../../model/common/type';
import { MIN_OFFSET } from '../../const';

const isPublicKey = (str: PublicKey) => {
    try {
        const publicKey = Buffer.from(str, 'hex');

        return publicKey.length === LENGTH.PUBLIC_KEY;
    } catch (e) {
        return false;
    }
};

Validator.registerFormat('id', (str) => {
    try {
        const publicKey = Buffer.from(str, 'hex');
        return publicKey.length === LENGTH.ID;
    } catch (e) {
        return false;
    }
});

Validator.registerFormat('address', (str) => {
    if (str.length === 0) {
        return true;
    }

    return /^\d{8,21}$/.test(str);
});

Validator.registerFormat('limit', (value: string | number): boolean => {
    if (typeof value === 'string') {
        value = Number(value);
    }

    return value !== NaN;
});

Validator.registerFormat('offset', (value: string | number): boolean => {
    if (typeof value === 'string') {
        value = Number(value);
    }

    if (value < MIN_OFFSET) {
        return false;
    }
    return true;
});

Validator.registerFormat('username', (str) => {
    return /^[a-z0-9!@$&_.]{1,20}$/ig.test(str);
});

Validator.registerFormat('hex', (str) => {
    try {
        Buffer.from(str, 'hex');
    } catch (e) {
        return false;
    }

    return true;
});

Validator.registerFormat('publicKey', isPublicKey);

Validator.registerFormat('signature', (str) => {
    if (str.length === 0) {
        return true;
    }

    try {
        const signature = Buffer.from(str, 'hex');
        return signature.length === LENGTH.SIGNATURE;
    } catch (e) {
        return false;
    }
});

Validator.registerFormat('version', (str) => {
    if (str.length === 0) {
        return true;
    }

    return /^([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3})([a-z]{1})?$/g.test(str);
});

Validator.registerFormat('secret', (secret) => {
    return Mnemonic.isValid(secret);
});

Validator.registerFormat('vote', (str) => {
    return new RegExp(`^[${VoteType.VOTE}${VoteType.DOWN_VOTE}]`, 'g').test(str) && isPublicKey(str.substr(1));
});

export default Validator;
