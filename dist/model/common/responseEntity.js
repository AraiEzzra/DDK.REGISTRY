"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ResponseEntity {
    constructor(params = {}) {
        this.success = params.errors ? !Boolean(params.errors.length) : true;
        this.errors = params.errors;
        this.data = params.data;
    }
}
exports.ResponseEntity = ResponseEntity;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzcG9uc2VFbnRpdHkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbW9kZWwvY29tbW9uL3Jlc3BvbnNlRW50aXR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBS0EsTUFBYSxjQUFjO0lBS3ZCLFlBQVksU0FBa0MsRUFBRTtRQUM1QyxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUNyRSxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDNUIsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQzVCLENBQUM7Q0FDSjtBQVZELHdDQVVDIn0=