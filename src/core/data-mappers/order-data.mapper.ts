import { injectable, inject } from 'inversify';
import { User, Product, Cart, Order, OrderItem } from '../../data/entities/index';
import { OrderDTO, UserDTO, OrderItemDTO } from '../dto/index';
import { IEntityDataMapper } from '../interfaces/index';
import TYPES from '../../infrastructure/ioc/types';

@injectable()
export class OrderDataMapper implements IEntityDataMapper<OrderDTO, Order> {
    private _userMapper: IEntityDataMapper<UserDTO, User>;
    private _orderItemMapper: IEntityDataMapper<OrderItemDTO, OrderItem>;

    constructor(@inject(TYPES.IUserDataMapper) userMapper: IEntityDataMapper<UserDTO, User>,
        @inject(TYPES.IOrderItemDataMapper) orderItemMapper: IEntityDataMapper<OrderItemDTO, OrderItem>) {
        this._userMapper = userMapper;
        this._orderItemMapper = orderItemMapper;
    }

    mapToDomain(entity: Order): OrderDTO {
        let orderDto = new OrderDTO(entity.OrderId,
            entity.User ? this._userMapper.mapToDomain(entity.User) : null, entity.Total,
            entity.OrderItems ? entity.OrderItems.map(orderItem => this._orderItemMapper.mapToDomain(orderItem)) : null, entity.OrderDate);
        return orderDto;
    }

    mapToEntity(domain: OrderDTO): Order {
        let order = new Order();
        order.OrderDate = domain.OrderDate;
        order.OrderId = domain.OrderId;
        order.OrderItems = domain.OrderItems ? domain.OrderItems.map(orderItem => this._orderItemMapper.mapToEntity(orderItem)) : null;
        order.Total = domain.Total;
        order.User = this._userMapper.mapToEntity(domain.User);
        return order;
    }
}