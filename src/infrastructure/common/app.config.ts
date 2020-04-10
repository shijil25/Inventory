import "reflect-metadata";
import {ConnectionOptions} from "typeorm";
import { OrderItem, Order, Product, User, Cart } from '../../data/entities/index';

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