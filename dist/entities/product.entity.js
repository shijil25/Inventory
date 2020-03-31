"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var order_item_entity_1 = require("./order-item.entity");
var cart_entity_1 = require("./cart.entity");
var typeorm_1 = require("typeorm");
var Product = /** @class */ (function () {
    function Product() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Product.prototype, "ProdID", void 0);
    __decorate([
        typeorm_1.Column({
            length: 200
        }),
        __metadata("design:type", String)
    ], Product.prototype, "Name", void 0);
    __decorate([
        typeorm_1.Column({
            length: 100
        }),
        __metadata("design:type", String)
    ], Product.prototype, "Description", void 0);
    __decorate([
        typeorm_1.Column("decimal", { precision: 18, scale: 2 }),
        __metadata("design:type", Number)
    ], Product.prototype, "Price", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Product.prototype, "ProdCount", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return cart_entity_1.Cart; }, function (cart) { return cart.Product; }),
        __metadata("design:type", Array)
    ], Product.prototype, "Carts", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return order_item_entity_1.OrderItem; }, function (orderItem) { return orderItem.Product; }),
        __metadata("design:type", Array)
    ], Product.prototype, "OrderItems", void 0);
    Product = __decorate([
        typeorm_1.Entity("Product")
    ], Product);
    return Product;
}());
exports.Product = Product;
//# sourceMappingURL=product.entity.js.map