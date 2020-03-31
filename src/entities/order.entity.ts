import { OrderItem } from './order-item.entity';
import { User } from './user.entity';
import { Entity, Column,  PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany, OneToOne } from "typeorm";

@Entity("Order")
export class Order {

    @PrimaryGeneratedColumn()
    OrderId: number;

    @ManyToOne(type => User, user => user.Orders)
    @JoinColumn({ name: "UserId" })
    User: User;

    @Column("decimal", { precision: 18, scale: 2 })
    Total: number;  

    @OneToMany(type => OrderItem, orderItem => orderItem.Order)
    OrderItems: OrderItem[];
    
    @Column("datetime")
    OrderDate : Date;
}
