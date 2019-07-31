export interface ResponseEntityParams<T> {
    errors?: Array<string>;
    data?: T;
}
export declare class ResponseEntity<T> {
    success: boolean;
    errors?: Array<string>;
    data?: T;
    constructor(params?: ResponseEntityParams<T>);
}
