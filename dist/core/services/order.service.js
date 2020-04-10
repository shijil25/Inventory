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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
var index_1 = require("./../dto/index");
var index_2 = require("../../data/entities/index");
var types_1 = require("../../infrastructure/ioc/types");
var OrderService = /** @class */ (function () {
    function OrderService(orderRepository, eventPublishService, orderDataMapper) {
        this._orderRepository = orderRepository;
        this._orderDataMapper = orderDataMapper;
        this._eventPublishService = eventPublishService;
    }
    OrderService.prototype.findAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            var orders, orderDtos, response;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._orderRepository.findAll()];
                    case 1:
                        orders = _a.sent();
                        orderDtos = orders ? orders.map(function (order) { return _this._orderDataMapper.mapToDomain(order); }) : null;
                        response = new index_1.ResponseData();
                        response.Data = orderDtos;
                        response.ErrorMessage = orderDtos ? null : 'No Orders Found';
                        response.IsSuccess = !!orderDtos;
                        return [2 /*return*/, response];
                }
            });
        });
    };
    OrderService.prototype.findById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var order, orderDto, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._orderRepository.findById(id)];
                    case 1:
                        order = _a.sent();
                        orderDto = this._orderDataMapper.mapToDomain(order);
                        response = new index_1.ResponseData();
                        response.Data = orderDto;
                        response.ErrorMessage = orderDto ? null : 'No Order Found';
                        response.IsSuccess = !!orderDto;
                        return [2 /*return*/, response];
                }
            });
        });
    };
    OrderService.prototype.findByUser = function (userId) {
        return __awaiter(this, void 0, void 0, function () {
            var orders, orderDtos, response;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._orderRepository.findByCustomer(userId)];
                    case 1:
                        orders = _a.sent();
                        orderDtos = orders ? orders.map(function (order) { return _this._orderDataMapper.mapToDomain(order); }) : null;
                        response = new index_1.ResponseData();
                        response.Data = orderDtos;
                        response.ErrorMessage = orderDtos ? null : 'No Orders Found';
                        response.IsSuccess = !!orderDtos;
                        return [2 /*return*/, response];
                }
            });
        });
    };
    OrderService.prototype.create = function (userId) {
        return __awaiter(this, void 0, void 0, function () {
            var response, user, order, result, newOrder, orderDto;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        response = new index_1.ResponseData();
                        user = new index_2.User();
                        user.UserId = userId;
                        order = new index_2.Order();
                        order.User = user;
                        return [4 /*yield*/, this._orderRepository.create(order)];
                    case 1:
                        result = _a.sent();
                        return [4 /*yield*/, this._orderRepository.findById(result[0].OrderId)];
                    case 2:
                        newOrder = _a.sent();
                        if (newOrder) {
                            this._eventPublishService.publish(newOrder);
                        }
                        orderDto = newOrder ? this._orderDataMapper.mapToDomain(newOrder) : null;
                        response.Data = orderDto;
                        response.ErrorMessage = orderDto ? null : 'Something went wrong';
                        response.IsSuccess = !!orderDto;
                        return [2 /*return*/, response];
                }
            });
        });
    };
    OrderService = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(types_1.default.IOrderRepository)),
        __param(1, inversify_1.inject(types_1.default.IEventPublishService)),
        __param(2, inversify_1.inject(types_1.default.IOrderDataMapper)),
        __metadata("design:paramtypes", [Object, Object, Object])
    ], OrderService);
    return OrderService;
}());
exports.OrderService = OrderService;
//# sourceMappingURL=order.service.js.map