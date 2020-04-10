import { Cart } from '../entities/cart.entity';
import { UpdateResult, DeleteResult } from 'typeorm';


/**
 * Icart repository
 */
export interface ICartRepository {
    
    findAll : ()=> Promise<Cart[]>;

    findById : (id : number)=> Promise<Cart>;

    create : (cart : Cart)=> Promise<Cart>;

    update : (id: number, cart: Cart)=> Promise<UpdateResult>;

    delete : (id : number)=> Promise<DeleteResult>;
}