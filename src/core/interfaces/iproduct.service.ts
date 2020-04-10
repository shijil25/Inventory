import { Response, ResponseData, ProductDTO } from './../dto/index';

export interface IProductService {
    findAll : ()=> Promise<ResponseData<ProductDTO[]>>;

    findById : (id : number)=> Promise<ResponseData<ProductDTO>>;

    create : (productDto : ProductDTO)=> Promise<ResponseData<ProductDTO>>;

    update : (id: number, productDto : ProductDTO)=> Promise<ResponseData<ProductDTO>>;

    delete : (id : number)=> Promise<Response>;
}