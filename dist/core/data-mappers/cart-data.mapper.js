"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
var index_1 = require("../../data/entities/index");
var index_2 = require("../dto/index");
var CartDataMapper = /** @class */ (function () {
    function CartDataMapper() {
    }
    CartDataMapper.prototype.mapToDomain = function (entity) {
        var cartModel = new index_2.CartDTO(entity.CartID, entity.Product.ProdID, entity.User.UserId, entity.Quantity, entity.Total);
        return cartModel;
    };
    CartDataMapper.prototype.mapToEntity = function (domain) {
        var cart = new index_1.Cart();
        cart.CartID = domain.CartId;
        cart.Product = new index_1.Product();
        cart.Product.ProdID = domain.ProductId;
        cart.Quantity = domain.Quantity;
        cart.Total = domain.Total;
        cart.User = new index_1.User();
        cart.User.UserId = domain.UserId;
        return cart;
    };
    CartDataMapper = __decorate([
        inversify_1.injectable()
    ], CartDataMapper);
    return CartDataMapper;
}());
exports.CartDataMapper = CartDataMapper;
//# sourceMappingURL=cart-data.mapper.js.map