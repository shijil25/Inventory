import { OrderItemDTO, ProductDTO } from './../dto/index';
import { injectable, inject } from 'inversify';
import { OrderItem, Product } from '../../data/entities/index';
import { IEntityDataMapper } from '../interfaces/index';
import TYPES from '../../infrastructure/ioc/types';

@injectable()
export class OrderItemDataMapper implements IEntityDataMapper<OrderItemDTO, OrderItem> {
    private _productMapper: IEntityDataMapper<ProductDTO, Product>;
    constructor(@inject(TYPES.IProductDataMapper) productMapper: IEntityDataMapper<ProductDTO, Product>) {
        this._productMapper = productMapper;
    }
    mapToDomain(entity: OrderItem): OrderItemDTO {
        let orderItemDto = new OrderItemDTO(entity.OrderItemId,
            this._productMapper.mapToDomain(entity.Product), entity.Quantity, entity.Total);
        return orderItemDto;
    }
    mapToEntity(domain: OrderItemDTO): OrderItem {
        let orderItem = new OrderItem();
        orderItem.OrderItemId = domain.OrderItemId;
        orderItem.Product = this._productMapper.mapToEntity(domain.Product);
        orderItem.Quantity = domain.Quantity;
        orderItem.Total = domain.Total;
        return orderItem;
    }
}