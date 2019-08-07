"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sodium_native_1 = __importDefault(require("sodium-native"));
const crypto_1 = __importDefault(require("crypto"));
class Ed {
    makeKeyPair(hash) {
        const keyPair = {
            publicKey: Buffer.alloc(sodium_native_1.default.crypto_sign_PUBLICKEYBYTES),
            privateKey: Buffer.alloc(sodium_native_1.default.crypto_sign_SECRETKEYBYTES)
        };
        sodium_native_1.default.crypto_sign_seed_keypair(keyPair.publicKey, keyPair.privateKey, hash);
        return keyPair;
    }
    sign(hash, keyPair) {
        const sig = Buffer.alloc(sodium_native_1.default.crypto_sign_BYTES);
        sodium_native_1.default.crypto_sign_detached(sig, hash, keyPair.privateKey);
        return sig;
    }
    verify(bytes, publicKey, signature) {
        const hash = crypto_1.default.createHash('sha256').update(bytes).digest();
        const signatureBuffer = Buffer.from(signature, 'hex');
        const publicKeyBuffer = Buffer.from(publicKey, 'hex');
        return sodium_native_1.default.crypto_sign_verify_detached(signatureBuffer, hash, publicKeyBuffer);
    }
    makePublicKeyHex(hash) {
        return this.makeKeyPair(hash).publicKey.toString('hex');
    }
}
exports.Ed = Ed;
exports.ed = new Ed();
