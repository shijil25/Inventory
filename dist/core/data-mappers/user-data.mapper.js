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
var UserDataMapper = /** @class */ (function () {
    function UserDataMapper() {
    }
    UserDataMapper.prototype.mapToDomain = function (entity) {
        var userDto = new index_1.UserDTO(entity.UserId, entity.LastName, entity.FirstName, entity.UserType, entity.Email, entity.UserName, entity.Password);
        return userDto;
    };
    UserDataMapper.prototype.mapToEntity = function (domain) {
        var user = new index_2.User();
        if (domain.UserId > 0) {
            user.UserId = domain.UserId;
        }
        user.Email = domain.Email;
        user.FirstName = domain.FirstName;
        user.LastName = domain.LastName;
        user.Password = domain.Password;
        user.UserName = domain.UserName;
        user.UserType = domain.UserType;
        return user;
    };
    UserDataMapper = __decorate([
        inversify_1.injectable()
    ], UserDataMapper);
    return UserDataMapper;
}());
exports.UserDataMapper = UserDataMapper;
//# sourceMappingURL=user-data.mapper.js.map