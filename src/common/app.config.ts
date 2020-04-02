import { OrderItem } from './../entities/order-item.entity';
import { Order } from './../entities/order.entity';
import { Cart } from './../entities/cart.entity';
import { Product } from './../entities/product.entity';
import { User } from './../entities/user.entity';
import "reflect-metadata";
import {ConnectionOptions} from "typeorm";

 export let dbOptions: ConnectionOptions = {
    type: "mssql",
    host: process.env.HOST,
    port: +process.env.DB_PORT,
    username: process.env.USER_NAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE_NAME,
    entities: [User , Product, Cart, Order, OrderItem],
    synchronize: true,
}