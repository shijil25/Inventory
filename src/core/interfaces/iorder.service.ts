import { Response, ResponseData, OrderDTO } from './../dto/index';

export interface IOrderService {
    findAll : ()=> Promise<ResponseData<OrderDTO[]>>;

    findById : (id : number)=> Promise<ResponseData<OrderDTO>>;

    findByUser : (userId : number)=> Promise<ResponseData<OrderDTO[]>>;

    create : (userId : number)=> Promise<ResponseData<OrderDTO>>;
}