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
 * Cart Repository
 */
var CartRepository = /** @class */ (function () {
    function CartRepository() {
    }
    /**
     * Finds all
     * @returns Promise<Cart[]>
     */
    CartRepository.prototype.findAll = function () {
        return typeorm_1.getManager().getRepository(index_1.Cart).find();
    };
    /**
     * Finds by id
     * @param id
     * @returns Promise<Cart>
     */
    CartRepository.prototype.findById = function (id) {
        return typeorm_1.getManager().getRepository(index_1.Cart).findOne({
            relations: ['Product', 'User'],
            where: { CartID: id }
        });
    };
    /**
     * Creates cart repository
     * @param cart
     * @returns Promise<Cart>
     */
    CartRepository.prototype.create = function (cart) {
        return typeorm_1.getManager().query("InsertCart @userId='" + cart.User.UserId + "', @productId='" + cart.Product.ProdID + "', @quantity='" + cart.Quantity + "' ");
    };
    /**
     * Updates cart repository
     * @param id
     * @param cart
     * @returns Promise<UpdateResult>
     */
    CartRepository.prototype.update = function (id, cart) {
        return typeorm_1.getManager().getRepository(index_1.Cart).update(id, cart);
    };
    /**
     * Deletes cart repository
     * @param id
     * @returns Promise<DeleteResult>
     */
    CartRepository.prototype.delete = function (id) {
        return typeorm_1.getManager().getRepository(index_1.Cart).delete(id);
    };
    CartRepository = __decorate([
        inversify_1.injectable()
    ], CartRepository);
    return CartRepository;
}());
exports.CartRepository = CartRepository;
//# sourceMappingURL=cart.repository.js.map