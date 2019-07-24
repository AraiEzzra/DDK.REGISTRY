"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
const clone_1 = require("../../../../util/clone");
const const_1 = require("../../../../const");
class AssetDelegate extends _1.Asset {
    constructor(data) {
        super();
        this.username = data.username.toLowerCase().trim();
    }
    getCopy() {
        return new AssetDelegate(clone_1.clone(this));
    }
    getBytes() {
        return Buffer.from(this.username, 'utf8');
    }
    calculateFee() {
        return const_1.FEES.DELEGATE;
    }
}
exports.AssetDelegate = AssetDelegate;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsZWdhdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbW9kZWwvY29tbW9uL3RyYW5zYWN0aW9uL2Fzc2V0L2RlbGVnYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsd0JBQTBCO0FBQzFCLGtEQUErQztBQUMvQyw2Q0FBeUM7QUFNekMsTUFBYSxhQUFjLFNBQVEsUUFBSztJQUdwQyxZQUFZLElBQXlCO1FBQ2pDLEtBQUssRUFBRSxDQUFDO1FBRVIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3ZELENBQUM7SUFFRCxPQUFPO1FBQ0gsT0FBTyxJQUFJLGFBQWEsQ0FBQyxhQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRUQsUUFBUTtRQUNKLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFRCxZQUFZO1FBQ1IsT0FBTyxZQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3pCLENBQUM7Q0FDSjtBQXBCRCxzQ0FvQkMifQ==