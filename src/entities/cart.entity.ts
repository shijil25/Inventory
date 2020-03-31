import { Order } from './order.entity';
import { User } from './user.entity';
import { Entity, Column,  PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany } from "typeorm";
import { Product } from './product.entity';

@Entity("Cart")
export class Cart {

    @PrimaryGeneratedColumn()
    CartID: number;

    @ManyToOne(type => Product, product => product.Carts)
    @JoinColumn({ name: "ProductId" })
    Product: Product;

    @ManyToOne(type => User, user => user.Carts)
    @JoinColumn({ name: "UserId" })
    User: User;

    @Column()
    Quantity: number;  

    @Column("decimal", { precision: 18, scale: 2 })
    Total: number
}
