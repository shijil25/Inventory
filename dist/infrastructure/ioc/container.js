"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./../../core/data-mappers/index");
var index_2 = require("../../core/services/index");
var inversify_1 = require("inversify");
var index_3 = require("../../data/repositories/index");
var types_1 = require("./types");
var container = new inversify_1.Container();
/**
 * Repositories
*/
container.bind(types_1.default.IUserRepository).to(index_3.UserRepository).inSingletonScope();
container.bind(types_1.default.IProductRepository).to(index_3.ProductRepository).inSingletonScope();
container.bind(types_1.default.ICartRepository).to(index_3.CartRepository).inSingletonScope();
container.bind(types_1.default.IOrderRepository).to(index_3.OrderRepository).inSingletonScope();
/**
 * Services
*/
container.bind(types_1.default.IEventPublishService).to(index_2.EventPublishService).inSingletonScope();
container.bind(types_1.default.ILoggerService).to(index_2.LoggerService).inSingletonScope();
container.bind(types_1.default.ICartService).to(index_2.CartService).inSingletonScope();
container.bind(types_1.default.IOrderService).to(index_2.OrderService).inSingletonScope();
container.bind(types_1.default.IUserService).to(index_2.UserService).inSingletonScope();
container.bind(types_1.default.IProductService).to(index_2.ProductService).inSingletonScope();
/**
 * Datamappers
*/
container.bind(types_1.default.ICartDataMapper).to(index_1.CartDataMapper).inSingletonScope();
container.bind(types_1.default.IProductDataMapper).to(index_1.ProductDataMapper).inSingletonScope();
container.bind(types_1.default.IOrderDataMapper).to(index_1.OrderDataMapper).inSingletonScope();
container.bind(types_1.default.IOrderItemDataMapper).to(index_1.OrderItemDataMapper).inSingletonScope();
container.bind(types_1.default.IUserDataMapper).to(index_1.UserDataMapper).inSingletonScope();
exports.default = container;
//# sourceMappingURL=container.js.map