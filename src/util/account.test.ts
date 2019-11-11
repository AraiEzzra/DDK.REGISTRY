import { expect } from 'chai';

import { getAddressByPublicKey } from './account';

describe('Account util', () => {
    it('Convert public key to address', () => {
        const publicKey = 'f4ae589b02f97e9ab5bce61cf187bcc96cfb3fdf9a11333703a682b7d47c8dc2';

        const actual = getAddressByPublicKey(publicKey);
        const expected = BigInt('4995063339468361088');

        expect(expected).to.equal(actual);
    });
});
