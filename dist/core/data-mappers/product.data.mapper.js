"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./../dto/index");
var inversify_1 = require("inversify");
var index_2 = require("../../data/entities/index");
var ProductDataMapper = /** @class */ (function () {
    function ProductDataMapper() {
    }
    ProductDataMapper.prototype.mapToDomain = function (entity) {
        var productDto = new index_1.ProductDTO(entity.ProdID, entity.Name, entity.Description, entity.Price, entity.ProdCount);
        return productDto;
    };
    ProductDataMapper.prototype.mapToEntity = function (domain) {
        var product = new index_2.Product();
        if (domain.ProdID > 0) {
            product.ProdID = domain.ProdID;
        }
        product.ProdCount = domain.ProdCount;
        product.Price = domain.Price;
        product.Name = domain.Name;
        product.Description = domain.Description;
        return product;
    };
    ProductDataMapper = __decorate([
        inversify_1.injectable()
    ], ProductDataMapper);
    return ProductDataMapper;
}());
exports.ProductDataMapper = ProductDataMapper;
//# sourceMappingURL=product.data.mapper.js.map