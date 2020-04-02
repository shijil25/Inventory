import { getManager } from "typeorm";
import { injectable } from "inversify";
import { Order } from './../entities/order.entity';
import { IOrderRepository } from '../interfaces/iorder.repository';

/**
 * Order repository
 */
@injectable()
export class OrderRepository implements IOrderRepository {

    /**
     * Finds all
     * @returns Promise<Order[]>
     */
    findAll() {
        return getManager().getRepository(Order).find();
    }

    /**
     * Finds by id
     * @param id 
     * @returns Promise<Order>
     */
    findById(id : number) {
        return getManager().getRepository(Order).findOne({
            relations: ['User' , 'OrderItems', 'OrderItems.Product'],
            where: { OrderId : id }
        });
    }

    /**
     * Finds by customer
     * @param customerId 
     * @returns Promise<Order[]>
     */
    findByCustomer(customerId : number) {
        return getManager().getRepository(Order).find({
            where : { UserId : customerId }
        });
    }   

    /**
     * Creates order repository
     * @param order 
     * @returns Promise<Order>
     */
    create(order : Order) {
       return getManager().query("InsertOrder @userId='"+ order.User.UserId +"'");
    }
}