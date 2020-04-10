import { Product } from './product.entity';
import { Order } from './order.entity';
import { Entity, Column,  PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";

@Entity("OrderItem")
export class OrderItem {

    @PrimaryGeneratedColumn()
    OrderItemId: number;

    @ManyToOne(type => Order, user => user.OrderItems)
    @JoinColumn({ name: "OrderId" })
    Order: Order;

    @ManyToOne(type => Product, user => user.OrderItems)
    @JoinColumn({ name: "ProductId" })
    Product: Product;

    @Column()
    Quantity: number; 

    @Column("decimal", { precision: 18, scale: 2 })
    Total: number;  
}
