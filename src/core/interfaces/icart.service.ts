import { Response, ResponseData, CartDTO } from './../dto/index';

export interface ICartService {
    findAll : ()=> Promise<ResponseData<CartDTO[]>>;

    findById : (id : number)=> Promise<ResponseData<CartDTO>>;

    create : (userId : number , productId : number ,  quantity : number)=> Promise<ResponseData<CartDTO>>;

    update : (id: number, quantity : number)=> Promise<ResponseData<CartDTO>>;

    delete : (id : number)=> Promise<Response>;
}