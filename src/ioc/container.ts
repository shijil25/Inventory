import { LoggerService } from './../services/logger.service';
import { ILoggerService } from './../interfaces/ilogger.service';
import { EventPublishService } from './../services/event-publish.service';
import { IEventPublishService } from '../interfaces/ievent-publish.service';
import { Container } from 'inversify';
import { UserRepository } from './../repositories/user.repository';
import { IUserRepository } from '../interfaces/iuser.repository';
import { ProductRepository } from './../repositories/product.repository';
import { IProductRepository } from '../interfaces/iproduct.repository';
import { CartRepository } from './../repositories/cart.repository';
import { ICartRepository } from '../interfaces/icart.repository';
import { OrderRepository } from './../repositories/order.repository';
import { IOrderRepository } from '../interfaces/iorder.repository';
import TYPES from './types';

const container = new Container();

container.bind<IUserRepository>(TYPES.IUserRepository).to(UserRepository).inSingletonScope();
container.bind<IProductRepository>(TYPES.IProductRepository).to(ProductRepository).inSingletonScope();
container.bind<ICartRepository>(TYPES.ICartRepository).to(CartRepository).inSingletonScope();
container.bind<IOrderRepository>(TYPES.IOrderRepository).to(OrderRepository).inSingletonScope();
container.bind<IEventPublishService>(TYPES.IEventPublishService).to(EventPublishService).inSingletonScope();
container.bind<ILoggerService>(TYPES.ILoggerService).to(LoggerService).inSingletonScope();
export default container;