import { Order } from '../entities/order.entity';

export interface IEventPublishService {
    publish: (order : Order) => Promise<any>;
}