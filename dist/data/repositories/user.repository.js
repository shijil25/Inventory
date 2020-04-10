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
 * User Repository
 */
var UserRepository = /** @class */ (function () {
    function UserRepository() {
    }
    /**
     * Finds all
     * @returns Promise<User[]>
     */
    UserRepository.prototype.findAll = function () {
        return typeorm_1.getManager().getRepository(index_1.User).find();
    };
    /**
     * Finds by id
     * @param id
     * @returns Promise<User>
     */
    UserRepository.prototype.findById = function (id) {
        return typeorm_1.getManager().getRepository(index_1.User).findOne(id);
    };
    /**
     * Creates user repository
     * @param user
     * @returns Promise<User>
     */
    UserRepository.prototype.createUser = function (user) {
        return typeorm_1.getManager().getRepository(index_1.User).save(user);
    };
    /**
     * Updates user repository
     * @param id
     * @param user
     * @returns Promise<UpdateResult>
     */
    UserRepository.prototype.update = function (id, user) {
        return typeorm_1.getManager().getRepository(index_1.User).update(id, user);
    };
    /**
     * Deletes user repository
     * @param id
     * @returns Promise<DeleteResult>
     */
    UserRepository.prototype.delete = function (id) {
        return typeorm_1.getManager().getRepository(index_1.User).delete(id);
    };
    UserRepository = __decorate([
        inversify_1.injectable()
    ], UserRepository);
    return UserRepository;
}());
exports.UserRepository = UserRepository;
//# sourceMappingURL=user.repository.js.map