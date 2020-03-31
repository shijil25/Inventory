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
    host: "SPANNIAN01\\MSSQLSERVER1",
    port: 8391,
    username: "sa",
    password: "shijil@123",
    database: "Inventory",
    entities: [user_entity_1.User, product_entity_1.Product, cart_entity_1.Cart, order_entity_1.Order, order_item_entity_1.OrderItem],
    synchronize: true,
};
//# sourceMappingURL=app.config.js.map