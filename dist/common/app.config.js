"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var order_item_entity_1 = require("./../entities/order-item.entity");
var order_entity_1 = require("./../entities/order.entity");
var cart_entity_1 = require("./../entities/cart.entity");
var product_entity_1 = require("./../entities/product.entity");
var user_entity_1 = require("./../entities/user.entity");
require("reflect-metadata");
exports.dbOptions = {
    type: "mssql",
    host: process.env.HOST,
    port: +process.env.DB_PORT,
    username: process.env.USER_NAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE_NAME,
    entities: [user_entity_1.User, product_entity_1.Product, cart_entity_1.Cart, order_entity_1.Order, order_item_entity_1.OrderItem],
    synchronize: true,
};
//# sourceMappingURL=app.config.js.map