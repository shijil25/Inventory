export class Response {
    IsSuccess : boolean;
    ErrorMessage : string
}

export class ResponseData<T> extends Response {
    Data : T;
}