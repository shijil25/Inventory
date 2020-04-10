import { Order } from '../../data/entities/index';

export interface IEventPublishService {
    publish: (order : Order) => Promise<any>;
}