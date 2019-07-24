"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
const clone_1 = require("../../../../util/clone");
const buffer_1 = __importDefault(require("../../../../util/buffer"));
class AssetReferral extends _1.Asset {
    constructor(data) {
        super();
        this.referral = data.referral;
    }
    getCopy() {
        return new AssetReferral(clone_1.clone(this));
    }
    getBytes() {
        const buff = Buffer.alloc(buffer_1.default.LENGTH.INT64);
        buffer_1.default.writeUInt64LE(buff, this.referral, 0);
        return buff;
    }
    calculateFee() {
        return 0;
    }
}
exports.AssetReferral = AssetReferral;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVmZXJyYWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbW9kZWwvY29tbW9uL3RyYW5zYWN0aW9uL2Fzc2V0L3JlZmVycmFsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0Esd0JBQTBCO0FBQzFCLGtEQUErQztBQUMvQyxxRUFBNkM7QUFNN0MsTUFBYSxhQUFjLFNBQVEsUUFBSztJQUdwQyxZQUFZLElBQXlCO1FBQ2pDLEtBQUssRUFBRSxDQUFDO1FBRVIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ2xDLENBQUM7SUFFRCxPQUFPO1FBQ0gsT0FBTyxJQUFJLGFBQWEsQ0FBQyxhQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRUQsUUFBUTtRQUNKLE1BQU0sSUFBSSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsZ0JBQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDL0MsZ0JBQU0sQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDN0MsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVELFlBQVk7UUFDUixPQUFPLENBQUMsQ0FBQztJQUNiLENBQUM7Q0FDSjtBQXRCRCxzQ0FzQkMifQ==