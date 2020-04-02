"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var logger_service_1 = require("./../services/logger.service");
var event_publish_service_1 = require("./../services/event-publish.service");
var inversify_1 = require("inversify");
var user_repository_1 = require("./../repositories/user.repository");
var product_repository_1 = require("./../repositories/product.repository");
var cart_repository_1 = require("./../repositories/cart.repository");
var order_repository_1 = require("./../repositories/order.repository");
var types_1 = require("./types");
var container = new inversify_1.Container();
container.bind(types_1.default.IUserRepository).to(user_repository_1.UserRepository).inSingletonScope();
container.bind(types_1.default.IProductRepository).to(product_repository_1.ProductRepository).inSingletonScope();
container.bind(types_1.default.ICartRepository).to(cart_repository_1.CartRepository).inSingletonScope();
container.bind(types_1.default.IOrderRepository).to(order_repository_1.OrderRepository).inSingletonScope();
container.bind(types_1.default.IEventPublishService).to(event_publish_service_1.EventPublishService).inSingletonScope();
container.bind(types_1.default.ILoggerService).to(logger_service_1.LoggerService).inSingletonScope();
exports.default = container;
//# sourceMappingURL=container.js.map