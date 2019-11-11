import { expect } from 'chai';

import { addressSerializer } from './address';

describe('Address serializer', () => {
    it('Serialize', () => {
        const data = BigInt('4995063339468361088');

        const actual = addressSerializer.serialize(data);
        const expected = '4995063339468361088';

        expect(expected).to.equal(actual);
    });

    it('Deserialize', () => {
        const raw = '4995063339468361088';

        const actual = addressSerializer.deserialize(raw);
        const expected = BigInt('4995063339468361088');

        expect(expected).to.equal(actual);
    });

    it('Deserialize big address', () => {
        const raw = '151608610309944850723';

        const actual = addressSerializer.deserialize(raw);
        const expected = BigInt('13681794396045176350');

        expect(expected).to.equal(actual);
    });
});
