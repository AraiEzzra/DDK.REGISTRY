"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
const clone_1 = require("../../../../util/clone");
const const_1 = require("../../../../const");
class AssetSignature extends _1.Asset {
    constructor(data) {
        super();
        this.publicKey = data.publicKey;
    }
    getCopy() {
        return new AssetSignature(clone_1.clone(this));
    }
    getBytes() {
        return Buffer.from(this.publicKey, 'hex');
    }
    calculateFee() {
        return const_1.FEES.SIGNATURE;
    }
}
exports.AssetSignature = AssetSignature;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbmF0dXJlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL21vZGVsL2NvbW1vbi90cmFuc2FjdGlvbi9hc3NldC9zaWduYXR1cmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx3QkFBMEI7QUFFMUIsa0RBQStDO0FBQy9DLDZDQUF5QztBQU16QyxNQUFhLGNBQWUsU0FBUSxRQUFLO0lBR3JDLFlBQVksSUFBMEI7UUFDbEMsS0FBSyxFQUFFLENBQUM7UUFFUixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDcEMsQ0FBQztJQUVELE9BQU87UUFDSCxPQUFPLElBQUksY0FBYyxDQUFDLGFBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFRCxRQUFRO1FBQ0osT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUVELFlBQVk7UUFDUixPQUFPLFlBQUksQ0FBQyxTQUFTLENBQUM7SUFDMUIsQ0FBQztDQUNKO0FBcEJELHdDQW9CQyJ9