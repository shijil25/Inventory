"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var inversify_1 = require("inversify");
var index_1 = require("../entities/index");
/**
 * Order repository
 */
var OrderRepository = /** @class */ (function () {
    function OrderRepository() {
    }
    /**
     * Finds all
     * @returns Promise<Order[]>
     */
    OrderRepository.prototype.findAll = function () {
        return typeorm_1.getManager().getRepository(index_1.Order).find();
    };
    /**
     * Finds by id
     * @param id
     * @returns Promise<Order>
     */
    OrderRepository.prototype.findById = function (id) {
        return typeorm_1.getManager().getRepository(index_1.Order).findOne({
            relations: ['User', 'OrderItems', 'OrderItems.Product'],
            where: { OrderId: id }
        });
    };
    /**
     * Finds by customer
     * @param customerId
     * @returns Promise<Order[]>
     */
    OrderRepository.prototype.findByCustomer = function (customerId) {
        return typeorm_1.getManager().getRepository(index_1.Order).find({
            where: { UserId: customerId }
        });
    };
    /**
     * Creates order repository
     * @param order
     * @returns Promise<Order>
     */
    OrderRepository.prototype.create = function (order) {
        return typeorm_1.getManager().query("InsertOrder @userId='" + order.User.UserId + "'");
    };
    OrderRepository = __decorate([
        inversify_1.injectable()
    ], OrderRepository);
    return OrderRepository;
}());
exports.OrderRepository = OrderRepository;
//# sourceMappingURL=order.repository.js.map