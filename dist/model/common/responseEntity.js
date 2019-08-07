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
