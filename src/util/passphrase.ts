import Mnemonic from 'bitcore-mnemonic';

export const generatePassphrase = () => {
    return new Mnemonic(Mnemonic.Words.ENGLISH).toString();
};
