"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clone = (data) => {
    let copy;
    if (data == null || typeof data !== 'object') {
        return data;
    }
    if (typeof data === 'function') {
        return undefined;
    }
    if (data instanceof Date) {
        copy = new Date();
        copy.setTime(data.getTime());
        return copy;
    }
    if (data instanceof Array) {
        copy = [];
        for (let i = 0, len = data.length; i < len; i++) {
            copy[i] = exports.clone(data[i]);
        }
        return copy;
    }
    if (data instanceof Object) {
        copy = {};
        for (const attr in data) {
            if (data.hasOwnProperty(attr)) {
                copy[attr] = exports.clone(data[attr]);
            }
        }
        return copy;
    }
    throw new Error('Unable to copy data! Its type isn\'t supported.');
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvbmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdXRpbC9jbG9uZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFhLFFBQUEsS0FBSyxHQUFHLENBQUksSUFBUyxFQUFLLEVBQUU7SUFDckMsSUFBSSxJQUFTLENBQUM7SUFFZCxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksT0FBTyxJQUFJLEtBQUssUUFBUSxFQUFFO1FBQzFDLE9BQU8sSUFBSSxDQUFDO0tBQ2Y7SUFFRCxJQUFJLE9BQU8sSUFBSSxLQUFLLFVBQVUsRUFBRTtRQUM1QixPQUFPLFNBQVMsQ0FBQztLQUNwQjtJQUVELElBQUksSUFBSSxZQUFZLElBQUksRUFBRTtRQUN0QixJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1FBQzdCLE9BQU8sSUFBSSxDQUFDO0tBQ2Y7SUFFRCxJQUFJLElBQUksWUFBWSxLQUFLLEVBQUU7UUFDdkIsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNWLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDN0MsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLGFBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUM1QjtRQUNELE9BQU8sSUFBSSxDQUFDO0tBQ2Y7SUFFRCxJQUFJLElBQUksWUFBWSxNQUFNLEVBQUU7UUFDeEIsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNWLEtBQUssTUFBTSxJQUFJLElBQUksSUFBSSxFQUFFO1lBQ3JCLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDM0IsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLGFBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQzthQUNsQztTQUNKO1FBQ0QsT0FBTyxJQUFJLENBQUM7S0FDZjtJQUVELE1BQU0sSUFBSSxLQUFLLENBQUMsaURBQWlELENBQUMsQ0FBQztBQUN2RSxDQUFDLENBQUMifQ==