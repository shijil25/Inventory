import { OrderItem } from './../entities/order-item.entity';
import { Order } from './../entities/order.entity';
import { Cart } from './../entities/cart.entity';
import { Product } from './../entities/product.entity';
import { User } from './../entities/user.entity';
import "reflect-metadata";
import {ConnectionOptions} from "typeorm";

 export let dbOptions: ConnectionOptions = {
    type: "mssql",
    host: "SPANNIAN01\\MSSQLSERVER1",
    port: 8391,
    username: "sa",
    password: "shijil@123",
    database: "Inventory",
    entities: [User , Product, Cart, Order, OrderItem],
    synchronize: true,
}