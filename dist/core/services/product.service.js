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
var types_1 = require("../../infrastructure/ioc/types");
var ProductService = /** @class */ (function () {
    function ProductService(productRepository, productDataMapper) {
        this._productRepository = productRepository;
        this._productDataMapper = productDataMapper;
    }
    ProductService.prototype.findAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            var products, productDtos, response;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._productRepository.findAll()];
                    case 1:
                        products = _a.sent();
                        productDtos = products ? products.map(function (product) { return _this._productDataMapper.mapToDomain(product); }) : null;
                        response = new index_1.ResponseData();
                        response.Data = productDtos;
                        response.ErrorMessage = productDtos ? null : 'No Products Found';
                        response.IsSuccess = !!productDtos;
                        return [2 /*return*/, response];
                }
            });
        });
    };
    ProductService.prototype.findById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var product, productDto, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._productRepository.findById(id)];
                    case 1:
                        product = _a.sent();
                        productDto = product ? this._productDataMapper.mapToDomain(product) : null;
                        response = new index_1.ResponseData();
                        response.Data = productDto;
                        response.ErrorMessage = productDto ? null : 'No Product Found';
                        response.IsSuccess = !!productDto;
                        return [2 /*return*/, response];
                }
            });
        });
    };
    ProductService.prototype.create = function (productDto) {
        return __awaiter(this, void 0, void 0, function () {
            var productEntity, product, newProduct, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        productEntity = this._productDataMapper.mapToEntity(productDto);
                        return [4 /*yield*/, this._productRepository.create(productEntity)];
                    case 1:
                        product = _a.sent();
                        newProduct = this._productDataMapper.mapToDomain(product);
                        response = new index_1.ResponseData();
                        response.Data = newProduct;
                        response.ErrorMessage = newProduct ? null : 'Something went wrong';
                        response.IsSuccess = !!newProduct;
                        return [2 /*return*/, response];
                }
            });
        });
    };
    ProductService.prototype.update = function (id, productDto) {
        return __awaiter(this, void 0, void 0, function () {
            var response, productEntity, result, product, newProduct;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        response = new index_1.ResponseData();
                        productEntity = this._productDataMapper.mapToEntity(productDto);
                        return [4 /*yield*/, this._productRepository.update(id, productEntity)];
                    case 1:
                        result = _a.sent();
                        if (!result) return [3 /*break*/, 3];
                        return [4 /*yield*/, this._productRepository.findById(id)];
                    case 2:
                        product = _a.sent();
                        newProduct = this._productDataMapper.mapToDomain(product);
                        response.Data = newProduct;
                        response.IsSuccess = true;
                        return [3 /*break*/, 4];
                    case 3:
                        response.ErrorMessage = 'Something went wrong';
                        response.IsSuccess = false;
                        _a.label = 4;
                    case 4: return [2 /*return*/, response];
                }
            });
        });
    };
    ProductService.prototype.delete = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var result, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._productRepository.delete(id)];
                    case 1:
                        result = _a.sent();
                        response = new index_1.Response();
                        if (result) {
                            response.IsSuccess = true;
                        }
                        else {
                            response.ErrorMessage = 'Something went wrong';
                            response.IsSuccess = false;
                        }
                        return [2 /*return*/, response];
                }
            });
        });
    };
    ProductService = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(types_1.default.IProductRepository)),
        __param(1, inversify_1.inject(types_1.default.IProductDataMapper)),
        __metadata("design:paramtypes", [Object, Object])
    ], ProductService);
    return ProductService;
}());
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map