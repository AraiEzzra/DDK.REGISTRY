"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("../../../../model/common/transaction/type");
exports.ASSET_STAKE = {
    id: `ASSET.${type_1.TransactionType.STAKE}`,
    type: 'object',
    properties: {
        amount: {
            type: 'integer',
            minimum: 100000000,
            maximum: 4500000000000000,
        },
    },
    required: ['amount'],
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Rha2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvdXRpbC92YWxpZGF0ZS9zY2hlbWUvYXNzZXQvc3Rha2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxvRUFBNEU7QUFFL0QsUUFBQSxXQUFXLEdBQUc7SUFDdkIsRUFBRSxFQUFFLFNBQVMsc0JBQWUsQ0FBQyxLQUFLLEVBQUU7SUFDcEMsSUFBSSxFQUFFLFFBQVE7SUFDZCxVQUFVLEVBQUU7UUFDUixNQUFNLEVBQUU7WUFDSixJQUFJLEVBQUUsU0FBUztZQUNmLE9BQU8sRUFBRSxTQUFTO1lBQ2xCLE9BQU8sRUFBRSxnQkFBZ0I7U0FDNUI7S0FDSjtJQUNELFFBQVEsRUFBRSxDQUFDLFFBQVEsQ0FBQztDQUN2QixDQUFDIn0=