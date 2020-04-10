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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
var index_1 = require("../../data/entities/index");
var index_2 = require("../dto/index");
var types_1 = require("../../infrastructure/ioc/types");
var OrderDataMapper = /** @class */ (function () {
    function OrderDataMapper(userMapper, orderItemMapper) {
        this._userMapper = userMapper;
        this._orderItemMapper = orderItemMapper;
    }
    OrderDataMapper.prototype.mapToDomain = function (entity) {
        var _this = this;
        var orderDto = new index_2.OrderDTO(entity.OrderId, entity.User ? this._userMapper.mapToDomain(entity.User) : null, entity.Total, entity.OrderItems ? entity.OrderItems.map(function (orderItem) { return _this._orderItemMapper.mapToDomain(orderItem); }) : null, entity.OrderDate);
        return orderDto;
    };
    OrderDataMapper.prototype.mapToEntity = function (domain) {
        var _this = this;
        var order = new index_1.Order();
        order.OrderDate = domain.OrderDate;
        order.OrderId = domain.OrderId;
        order.OrderItems = domain.OrderItems ? domain.OrderItems.map(function (orderItem) { return _this._orderItemMapper.mapToEntity(orderItem); }) : null;
        order.Total = domain.Total;
        order.User = this._userMapper.mapToEntity(domain.User);
        return order;
    };
    OrderDataMapper = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(types_1.default.IUserDataMapper)),
        __param(1, inversify_1.inject(types_1.default.IOrderItemDataMapper)),
        __metadata("design:paramtypes", [Object, Object])
    ], OrderDataMapper);
    return OrderDataMapper;
}());
exports.OrderDataMapper = OrderDataMapper;
//# sourceMappingURL=order-data.mapper.js.map