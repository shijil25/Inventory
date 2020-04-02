const TYPES = {
    IUserRepository: Symbol('IUserRepository'),
    IProductRepository: Symbol('IProductRepository'),
    ICartRepository: Symbol('ICartRepository'),
    IOrderRepository: Symbol('IOrderRepository'),
    IEventPublishService: Symbol('IEventPublishService'),
    ILoggerService: Symbol('ILoggerService')
};

export default TYPES;