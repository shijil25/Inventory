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
var user_entity_1 = require("./user.entity");
var typeorm_1 = require("typeorm");
var Order = /** @class */ (function () {
    function Order() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Order.prototype, "OrderId", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return user_entity_1.User; }, function (user) { return user.Orders; }),
        typeorm_1.JoinColumn({ name: "UserId" }),
        __metadata("design:type", user_entity_1.User)
    ], Order.prototype, "User", void 0);
    __decorate([
        typeorm_1.Column("decimal", { precision: 18, scale: 2 }),
        __metadata("design:type", Number)
    ], Order.prototype, "Total", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return order_item_entity_1.OrderItem; }, function (orderItem) { return orderItem.Order; }),
        __metadata("design:type", Array)
    ], Order.prototype, "OrderItems", void 0);
    __decorate([
        typeorm_1.Column("datetime"),
        __metadata("design:type", Date)
    ], Order.prototype, "OrderDate", void 0);
    Order = __decorate([
        typeorm_1.Entity("Order")
    ], Order);
    return Order;
}());
exports.Order = Order;
//# sourceMappingURL=order.entity.js.map