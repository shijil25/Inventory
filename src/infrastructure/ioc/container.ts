import { CartDataMapper, UserDataMapper, ProductDataMapper, OrderDataMapper, OrderItemDataMapper } from './../../core/data-mappers/index';
import { User, Product, Cart, OrderItem, Order } from '../../data/entities/index';
import { CartDTO, ProductDTO, UserDTO, OrderDTO, OrderItemDTO } from './../../core/dto/index';
import { ICartService, IEntityDataMapper, ILoggerService , IEventPublishService , IOrderService, IProductService, IUserService} from './../../core/interfaces/index';
import { LoggerService, EventPublishService, CartService, OrderService, ProductService, UserService } from '../../core/services/index';
import { Container } from 'inversify';
import { UserRepository, ProductRepository, OrderRepository, CartRepository } from '../../data/repositories/index';
import { IUserRepository , IOrderRepository, IProductRepository, ICartRepository } from '../../data/interfaces/index';
import TYPES from './types';

const container = new Container();

/** 
 * Repositories
*/
container.bind<IUserRepository>(TYPES.IUserRepository).to(UserRepository).inSingletonScope();
container.bind<IProductRepository>(TYPES.IProductRepository).to(ProductRepository).inSingletonScope();
container.bind<ICartRepository>(TYPES.ICartRepository).to(CartRepository).inSingletonScope();
container.bind<IOrderRepository>(TYPES.IOrderRepository).to(OrderRepository).inSingletonScope();

/** 
 * Services
*/
container.bind<IEventPublishService>(TYPES.IEventPublishService).to(EventPublishService).inSingletonScope();
container.bind<ILoggerService>(TYPES.ILoggerService).to(LoggerService).inSingletonScope();
container.bind<ICartService>(TYPES.ICartService).to(CartService).inSingletonScope();
container.bind<IOrderService>(TYPES.IOrderService).to(OrderService).inSingletonScope();
container.bind<IUserService>(TYPES.IUserService).to(UserService).inSingletonScope();
container.bind<IProductService>(TYPES.IProductService).to(ProductService).inSingletonScope();

/** 
 * Datamappers
*/
container.bind<IEntityDataMapper<CartDTO, Cart>>(TYPES.ICartDataMapper).to(CartDataMapper).inSingletonScope();
container.bind<IEntityDataMapper<ProductDTO, Product>>(TYPES.IProductDataMapper).to(ProductDataMapper).inSingletonScope();
container.bind<IEntityDataMapper<OrderDTO, Order>>(TYPES.IOrderDataMapper).to(OrderDataMapper).inSingletonScope();
container.bind<IEntityDataMapper<OrderItemDTO, OrderItem>>(TYPES.IOrderItemDataMapper).to(OrderItemDataMapper).inSingletonScope();
container.bind<IEntityDataMapper<UserDTO, User>>(TYPES.IUserDataMapper).to(UserDataMapper).inSingletonScope();
export default container;