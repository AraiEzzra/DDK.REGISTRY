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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdXRpbC9lZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLGtFQUFtQztBQUNuQyxvREFBNEI7QUFPNUIsTUFBYSxFQUFFO0lBRUosV0FBVyxDQUFDLElBQVk7UUFDM0IsTUFBTSxPQUFPLEdBQWE7WUFDdEIsU0FBUyxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsdUJBQU0sQ0FBQywwQkFBMEIsQ0FBQztZQUMxRCxVQUFVLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyx1QkFBTSxDQUFDLDBCQUEwQixDQUFDO1NBQzlELENBQUM7UUFFRix1QkFBTSxDQUFDLHdCQUF3QixDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM3RSxPQUFPLE9BQU8sQ0FBQztJQUNuQixDQUFDO0lBRU0sSUFBSSxDQUFDLElBQVksRUFBRSxPQUFpQjtRQUN2QyxNQUFNLEdBQUcsR0FBVyxNQUFNLENBQUMsS0FBSyxDQUFDLHVCQUFNLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUMzRCx1QkFBTSxDQUFDLG9CQUFvQixDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzNELE9BQU8sR0FBRyxDQUFDO0lBQ2YsQ0FBQztJQUVNLE1BQU0sQ0FBQyxLQUFpQixFQUFFLFNBQWlCLEVBQUUsU0FBaUI7UUFDakUsTUFBTSxJQUFJLEdBQUcsZ0JBQU0sQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2hFLE1BQU0sZUFBZSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3RELE1BQU0sZUFBZSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3RELE9BQU8sdUJBQU0sQ0FBQywyQkFBMkIsQ0FBQyxlQUFlLEVBQUUsSUFBSSxFQUFFLGVBQWUsQ0FBQyxDQUFDO0lBQ3RGLENBQUM7SUFFTSxnQkFBZ0IsQ0FBQyxJQUFZO1FBQ2hDLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVELENBQUM7Q0FFSjtBQTdCRCxnQkE2QkM7QUFFWSxRQUFBLEVBQUUsR0FBRyxJQUFJLEVBQUUsRUFBRSxDQUFDIn0=