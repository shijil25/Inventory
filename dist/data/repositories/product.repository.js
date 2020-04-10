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
 * Product Repository
 */
var ProductRepository = /** @class */ (function () {
    function ProductRepository() {
    }
    /**
     * Finds all
     * @returns Promis<Product[]>
     */
    ProductRepository.prototype.findAll = function () {
        return typeorm_1.getManager().getRepository(index_1.Product).find();
    };
    /**
     * Finds by id
     * @param id
     * @returns Promise<Product>
     */
    ProductRepository.prototype.findById = function (id) {
        return typeorm_1.getManager().getRepository(index_1.Product).findOne(id);
    };
    /**
     * Creates product repository
     * @param product
     * @returns Promise<Product>
     */
    ProductRepository.prototype.create = function (product) {
        return typeorm_1.getManager().getRepository(index_1.Product).save(product);
    };
    /**
     * Updates product repository
     * @param id
     * @param product
     * @returns Promise<UpdateResult>
     */
    ProductRepository.prototype.update = function (id, product) {
        return typeorm_1.getManager().getRepository(index_1.Product).update(id, product);
    };
    /**
     * Deletes product repository
     * @param id
     * @returns Promise<DeleteResult>
     */
    ProductRepository.prototype.delete = function (id) {
        return typeorm_1.getManager().getRepository(index_1.Product).delete(id);
    };
    ProductRepository = __decorate([
        inversify_1.injectable()
    ], ProductRepository);
    return ProductRepository;
}());
exports.ProductRepository = ProductRepository;
//# sourceMappingURL=product.repository.js.map