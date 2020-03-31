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
var express = require("express");
var inversify_express_utils_1 = require("inversify-express-utils");
var inversify_1 = require("inversify");
var types_1 = require("../ioc/types");
var product_entity_1 = require("../entities/product.entity");
/**
 * Product Controller
 */
var ProductController = /** @class */ (function () {
    /**
     * Creates an instance of product controller.
     * @param productRepository
     */
    function ProductController(productRepository) {
        this.productRepository = productRepository;
    }
    /**
     * Https get
     * @param req
     * @param res
     */
    ProductController.prototype.getProducts = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var product, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.productRepository.findAll()];
                    case 1:
                        product = _a.sent();
                        if (!product) {
                            res.status(404).json("No products found");
                        }
                        else {
                            res.status(200).json(product);
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        res.status(400).json(error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Https get
     * @param req
     * @param res
     */
    ProductController.prototype.getProduct = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var product, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.productRepository.findById(+req.params.id)];
                    case 1:
                        product = _a.sent();
                        if (!product) {
                            res.status(404).json("No product found");
                        }
                        else {
                            res.status(200).json(product);
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        error_2 = _a.sent();
                        res.status(400).json(error_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Https post
     * @param req
     * @param res
     */
    ProductController.prototype.postProduct = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var product, newproduct, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        product = new product_entity_1.Product();
                        product.Description = req.body.description;
                        product.Name = req.body.name;
                        product.Price = req.body.price;
                        product.ProdCount = req.body.productCount;
                        return [4 /*yield*/, this.productRepository.create(product)];
                    case 1:
                        newproduct = _a.sent();
                        res.status(200).json(newproduct);
                        return [3 /*break*/, 3];
                    case 2:
                        error_3 = _a.sent();
                        res.status(400).json(error_3);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Https put
     * @param req
     * @param res
     */
    ProductController.prototype.putProduct = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var product, result, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        product = new product_entity_1.Product();
                        product.Description = req.body.description;
                        product.Name = req.body.name;
                        product.Price = req.body.price;
                        product.ProdCount = req.body.productCount;
                        return [4 /*yield*/, this.productRepository.update(+req.params.id, product)];
                    case 1:
                        result = _a.sent();
                        if (result) {
                            res.status(200).json(req.body);
                        }
                        else {
                            res.status(400).json('Something went wrong');
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        error_4 = _a.sent();
                        res.status(400).json(error_4);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Https delete
     * @param req
     * @param res
     */
    ProductController.prototype.deleteProduct = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var result, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        console.log('inside delete');
                        return [4 /*yield*/, this.productRepository.delete(+req.params.id)];
                    case 1:
                        result = _a.sent();
                        console.log(result);
                        if (result) {
                            res.status(200).json('Successfully deleted!');
                        }
                        else {
                            res.status(400).json('Something went wrong');
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        error_5 = _a.sent();
                        res.status(400).json(error_5);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        inversify_express_utils_1.httpGet('/'),
        __param(0, inversify_express_utils_1.request()), __param(1, inversify_express_utils_1.response()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", Promise)
    ], ProductController.prototype, "getProducts", null);
    __decorate([
        inversify_express_utils_1.httpGet('/:id'),
        __param(0, inversify_express_utils_1.request()), __param(1, inversify_express_utils_1.response()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", Promise)
    ], ProductController.prototype, "getProduct", null);
    __decorate([
        inversify_express_utils_1.httpPost('/'),
        __param(0, inversify_express_utils_1.request()), __param(1, inversify_express_utils_1.response()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", Promise)
    ], ProductController.prototype, "postProduct", null);
    __decorate([
        inversify_express_utils_1.httpPut('/:id'),
        __param(0, inversify_express_utils_1.request()), __param(1, inversify_express_utils_1.response()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", Promise)
    ], ProductController.prototype, "putProduct", null);
    __decorate([
        inversify_express_utils_1.httpDelete('/:id'),
        __param(0, inversify_express_utils_1.request()), __param(1, inversify_express_utils_1.response()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", Promise)
    ], ProductController.prototype, "deleteProduct", null);
    ProductController = __decorate([
        inversify_express_utils_1.controller('/products'),
        __param(0, inversify_1.inject(types_1.default.IProductRepository)),
        __metadata("design:paramtypes", [Object])
    ], ProductController);
    return ProductController;
}());
exports.ProductController = ProductController;
//# sourceMappingURL=product.controller.js.map