import { OrderItemDTO, UserDTO } from './index';

export class OrderDTO {
    constructor(
        public OrderId: number,
        public User: UserDTO,
        public Total: number,
        public OrderItems: OrderItemDTO[],
        public OrderDate: Date) { }
}
