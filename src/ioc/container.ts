import { Container } from 'inversify';
import { UserRepository } from './../repositories/user.repository';
import { IUserRepository } from './../repositories/iuser.repository';
import { ProductRepository } from './../repositories/product.repository';
import { IProductRepository } from './../repositories/iproduct.repository';
import { CartRepository } from './../repositories/cart.repository';
import { ICartRepository } from './../repositories/icart.repository';
import { OrderRepository } from './../repositories/order.repository';
import { IOrderRepository } from './../repositories/iorder.repository';
import TYPES from './types';

const container = new Container();

container.bind<IUserRepository>(TYPES.IUserRepository).to(UserRepository).inSingletonScope();
container.bind<IProductRepository>(TYPES.IProductRepository).to(ProductRepository).inSingletonScope();
container.bind<ICartRepository>(TYPES.ICartRepository).to(CartRepository).inSingletonScope();
container.bind<IOrderRepository>(TYPES.IOrderRepository).to(OrderRepository).inSingletonScope();
export default container;