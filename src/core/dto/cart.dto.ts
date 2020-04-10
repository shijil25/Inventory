export class CartDTO {
    constructor(
        public CartId: number,
        public ProductId: number,
        public UserId: number,
        public Quantity: number,  
        public Total: number
        ) {}
}