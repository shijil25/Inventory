import { getManager } from "typeorm";
import { injectable } from "inversify";
import { Product } from './../entities/product.entity';
import { IProductRepository } from './iproduct.repository';

/**
 * Product Repository
 */
@injectable()
export class ProductRepository implements IProductRepository {

    /**
     * Finds all
     * @returns Promis<Product[]>
     */
    findAll() {
        return getManager().getRepository(Product).find();
    }

    /**
     * Finds by id
     * @param id 
     * @returns Promise<Product> 
     */
    findById(id : number) {
        return getManager().getRepository(Product).findOne(id);
    }

    /**
     * Creates product repository
     * @param product 
     * @returns Promise<Product> 
     */
    create(product : Product) {
        return getManager().getRepository(Product).save(product);
    }

    /**
     * Updates product repository
     * @param id 
     * @param product 
     * @returns Promise<UpdateResult> 
     */
    update(id : number, product : Product) {
       return getManager().getRepository(Product).update(id, product);
    }

    /**
     * Deletes product repository
     * @param id 
     * @returns Promise<DeleteResult>  
     */
    delete(id : number) {
        return getManager().getRepository(Product).delete(id);
    }
}