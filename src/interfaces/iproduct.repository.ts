import { Product } from '../entities/product.entity';
import { UpdateResult, DeleteResult } from 'typeorm';

/**
 * Iproduct repository
 */
export interface IProductRepository {
    findAll : ()=> Promise<Product[]>;

    findById : (id : number)=> Promise<Product>;

    create : (product : Product)=> Promise<Product>;

    update : (id: number, product: Product)=> Promise<UpdateResult>;

    delete : (id : number)=> Promise<DeleteResult>;
}