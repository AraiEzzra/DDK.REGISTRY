import BUFFER from '../util/buffer';

export const TRANSACTION_SALT_LENGTH = 16;
export const PUBLIC_KEY_LENGTH = 32;
export const SIGNATURE_LENGTH = 64;
export const ADDRESS_LENGTH = BUFFER.LENGTH.INT64;

export const TRANSACTION_BUFFER_SIZE =
    BUFFER.LENGTH.BYTE +        // type
    BUFFER.LENGTH.UINT32 +      // createdAt
    TRANSACTION_SALT_LENGTH +
    PUBLIC_KEY_LENGTH;
