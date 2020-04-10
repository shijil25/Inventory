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
var UserService = /** @class */ (function () {
    function UserService(userRepository, userDataMapper) {
        this._userRepository = userRepository;
        this._userDataMapper = userDataMapper;
    }
    UserService.prototype.findAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            var users, userDtos, response;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._userRepository.findAll()];
                    case 1:
                        users = _a.sent();
                        userDtos = users ? users.map(function (user) { return _this._userDataMapper.mapToDomain(user); }) : null;
                        response = new index_1.ResponseData();
                        response.Data = userDtos;
                        response.ErrorMessage = userDtos ? null : 'No Users Found';
                        response.IsSuccess = !!userDtos;
                        return [2 /*return*/, response];
                }
            });
        });
    };
    UserService.prototype.findById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var user, userDto, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._userRepository.findById(id)];
                    case 1:
                        user = _a.sent();
                        userDto = this._userDataMapper.mapToDomain(user);
                        response = new index_1.ResponseData();
                        response.Data = userDto;
                        response.ErrorMessage = userDto ? null : 'No User Found';
                        response.IsSuccess = !!userDto;
                        return [2 /*return*/, response];
                }
            });
        });
    };
    UserService.prototype.create = function (userDto) {
        return __awaiter(this, void 0, void 0, function () {
            var userEntity, user, newUser, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        userEntity = this._userDataMapper.mapToEntity(userDto);
                        return [4 /*yield*/, this._userRepository.createUser(userEntity)];
                    case 1:
                        user = _a.sent();
                        newUser = this._userDataMapper.mapToDomain(user);
                        response = new index_1.ResponseData();
                        response.Data = newUser;
                        response.ErrorMessage = newUser ? null : 'Something went wrong';
                        response.IsSuccess = !!newUser;
                        return [2 /*return*/, response];
                }
            });
        });
    };
    UserService.prototype.update = function (id, userDto) {
        return __awaiter(this, void 0, void 0, function () {
            var response, userEntity, result, user, newUser;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        response = new index_1.ResponseData();
                        userEntity = this._userDataMapper.mapToEntity(userDto);
                        return [4 /*yield*/, this._userRepository.update(id, userEntity)];
                    case 1:
                        result = _a.sent();
                        if (!result) return [3 /*break*/, 3];
                        return [4 /*yield*/, this._userRepository.findById(id)];
                    case 2:
                        user = _a.sent();
                        newUser = this._userDataMapper.mapToDomain(user);
                        response.Data = newUser;
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
    UserService.prototype.delete = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var result, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._userRepository.delete(id)];
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
    UserService = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(types_1.default.IUserRepository)),
        __param(1, inversify_1.inject(types_1.default.IUserDataMapper)),
        __metadata("design:paramtypes", [Object, Object])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map