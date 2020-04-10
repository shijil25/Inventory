import { injectable } from 'inversify';
import { User, Product, Cart } from '../../data/entities/index';
import { CartDTO } from '../dto/index';
import { IEntityDataMapper } from '../interfaces/index';

@injectable()
export class CartDataMapper implements IEntityDataMapper<CartDTO, Cart> {
    mapToDomain(entity : Cart) : CartDTO  {
        let cartModel = new CartDTO(entity.CartID,
                                    entity.Product.ProdID,
                                    entity.User.UserId,
                                    entity.Quantity,
                                    entity.Total);       
        return cartModel;
    }
    mapToEntity(domain : CartDTO) : Cart {
        let cart = new Cart();
        cart.CartID = domain.CartId;
        cart.Product = new Product();
        cart.Product.ProdID = domain.ProductId;
        cart.Quantity = domain.Quantity;
        cart.Total = domain.Total;
        cart.User = new User();
        cart.User.UserId = domain.UserId;
        return cart;
    }
}