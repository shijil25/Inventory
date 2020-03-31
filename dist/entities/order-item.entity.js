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
var product_entity_1 = require("./product.entity");
var order_entity_1 = require("./order.entity");
var typeorm_1 = require("typeorm");
var OrderItem = /** @class */ (function () {
    function OrderItem() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], OrderItem.prototype, "OrderItemId", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return order_entity_1.Order; }, function (user) { return user.OrderItems; }),
        typeorm_1.JoinColumn({ name: "OrderId" }),
        __metadata("design:type", order_entity_1.Order)
    ], OrderItem.prototype, "Order", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return product_entity_1.Product; }, function (user) { return user.OrderItems; }),
        typeorm_1.JoinColumn({ name: "ProductId" }),
        __metadata("design:type", product_entity_1.Product)
    ], OrderItem.prototype, "Product", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], OrderItem.prototype, "Quantity", void 0);
    __decorate([
        typeorm_1.Column("decimal", { precision: 18, scale: 2 }),
        __metadata("design:type", Number)
    ], OrderItem.prototype, "Total", void 0);
    OrderItem = __decorate([
        typeorm_1.Entity("OrderItem")
    ], OrderItem);
    return OrderItem;
}());
exports.OrderItem = OrderItem;
//# sourceMappingURL=order-item.entity.js.map