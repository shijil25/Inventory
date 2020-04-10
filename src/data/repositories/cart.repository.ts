import { getManager } from "typeorm";
import { injectable } from "inversify";
import { ICartRepository } from '../interfaces/index';
import { Cart } from '../entities/index';

/**
 * Cart Repository
 */
@injectable()
export class CartRepository implements ICartRepository {
    /**
     * Finds all
     * @returns Promise<Cart[]> 
     */
    findAll() {
        return getManager().getRepository(Cart).find();
    }
    
    /**
     * Finds by id
     * @param id 
     * @returns Promise<Cart>
     */
    findById(id : number) {
        return getManager().getRepository(Cart).findOne({
            relations: ['Product', 'User'],
            where: { CartID : id }
        });
    }

    /**
     * Creates cart repository
     * @param cart 
     * @returns Promise<Cart>
     */
    create(cart : Cart) {
       return getManager().query("InsertCart @userId='"+ cart.User.UserId +"', @productId='"+ cart.Product.ProdID +"', @quantity='"+ cart.Quantity +"' ");
    }

    /**
     * Updates cart repository
     * @param id 
     * @param cart 
     * @returns Promise<UpdateResult>
     */
    update(id : number, cart : Cart) {
       return getManager().getRepository(Cart).update(id, cart);
    }

    /**
     * Deletes cart repository
     * @param id 
     * @returns Promise<DeleteResult> 
     */
    delete(id : number) {
        return getManager().getRepository(Cart).delete(id);
    }
}