import { OrderItem } from './order-item.entity';
import { Cart } from './cart.entity';
import { Entity, Column,  PrimaryGeneratedColumn, OneToMany } from "typeorm";

@Entity("Product")
export class Product {

    @PrimaryGeneratedColumn()
    ProdID: number;

    @Column({
        length: 200
    })
    Name: string;

    @Column({
        length: 100
    })
    Description: string;

    @Column("decimal", { precision: 18, scale: 2 })
    Price: number;

    @Column()
    ProdCount: number;   
    
    @OneToMany(type => Cart, cart => cart.Product)
    Carts: Cart[];

    @OneToMany(type => OrderItem, orderItem => orderItem.Product)
    OrderItems: OrderItem[];
}
