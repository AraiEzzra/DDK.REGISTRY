"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("../../../../model/common/transaction/type");
exports.ASSET_DELEGATE = {
    id: `ASSET.${type_1.TransactionType.DELEGATE}`,
    type: 'object',
    properties: {
        username: {
            type: 'string',
            format: 'username',
        },
    },
    required: ['username'],
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsZWdhdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvdXRpbC92YWxpZGF0ZS9zY2hlbWUvYXNzZXQvZGVsZWdhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxvRUFBNEU7QUFFL0QsUUFBQSxjQUFjLEdBQUc7SUFDMUIsRUFBRSxFQUFFLFNBQVMsc0JBQWUsQ0FBQyxRQUFRLEVBQUU7SUFDdkMsSUFBSSxFQUFFLFFBQVE7SUFDZCxVQUFVLEVBQUU7UUFDUixRQUFRLEVBQUU7WUFDTixJQUFJLEVBQUUsUUFBUTtZQUNkLE1BQU0sRUFBRSxVQUFVO1NBQ3JCO0tBQ0o7SUFDRCxRQUFRLEVBQUUsQ0FBQyxVQUFVLENBQUM7Q0FDekIsQ0FBQyJ9