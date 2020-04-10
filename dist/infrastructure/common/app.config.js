"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var index_1 = require("../../data/entities/index");
exports.dbOptions = {
    type: "mssql",
    host: process.env.HOST,
    port: +process.env.DB_PORT,
    username: process.env.USER_NAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE_NAME,
    entities: [index_1.User, index_1.Product, index_1.Cart, index_1.Order, index_1.OrderItem],
    synchronize: true,
};
//# sourceMappingURL=app.config.js.map