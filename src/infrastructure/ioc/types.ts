const TYPES = {
    IUserRepository: Symbol('IUserRepository'),
    IProductRepository: Symbol('IProductRepository'),
    ICartRepository: Symbol('ICartRepository'),
    IOrderRepository: Symbol('IOrderRepository'),
   
    IEventPublishService: Symbol('IEventPublishService'),
    ILoggerService: Symbol('ILoggerService'),
    ICartService: Symbol('ICartService'),
    IOrderService : Symbol('IOrderService'),
    IUserService : Symbol('IUserService'),
    IProductService : Symbol('IProductService'),
    
    ICartDataMapper: Symbol('ICartDataMapper'),
    IOrderDataMapper: Symbol('IOrderDataMapper'),
    IOrderItemDataMapper: Symbol('IOrderItemDataMapper'),
    IProductDataMapper: Symbol('IProductDataMapper'),
    IUserDataMapper: Symbol('IUserDataMapper')
};

export default TYPES;