import { Order } from './../entities/order.entity';

/**
 * Iorder repository
 */
export interface IOrderRepository {
    findAll : () => Promise<Order[]>;

    findById : (id : number) => Promise<Order>;

    findByCustomer : (coustomerId : number) => Promise<Order[]>;

    create : (cart : Order) => Promise<Order>;
}