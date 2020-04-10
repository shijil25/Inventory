import { Order } from './order.entity';
import { Cart } from './cart.entity';
import { Entity, Column,  PrimaryGeneratedColumn, OneToMany } from "typeorm";

@Entity("User")
export class User {

    @PrimaryGeneratedColumn()
    UserId: number;

    @Column({
        length: 100
    })
    LastName: string;

    @Column({
        length: 100
    })
    FirstName: string;

   @Column({
        length: 100
    })
    UserType: string;

    @Column({
        length: 100
    })
    Email: string;

    @Column({
        length: 100
    })
    UserName: string;

   @Column({
        length: 100
    })
    Password: string;

    @OneToMany(type => Cart, cart => cart.User)
    Carts: Cart[];

    @OneToMany(type => Order, order => order.User)
    Orders: Order[];
}
