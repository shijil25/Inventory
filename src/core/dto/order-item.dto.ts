import { ProductDTO } from './index';

export class OrderItemDTO {
    constructor(
        public OrderItemId: number,
        public Product: ProductDTO,
        public Quantity: number,
        public Total: number) { }
}