import BUFFER from '../util/buffer';

export const TRANSACTION_SALT_LENGTH = 16;

export const TRANSACTION_BUFFER_SIZE =
    BUFFER.LENGTH.BYTE +        // type
    BUFFER.LENGTH.UINT32;       // createdAt
