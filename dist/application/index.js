"use strict";
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
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var express = require("express");
require('dotenv').config();
var inversify_express_utils_1 = require("inversify-express-utils");
var bodyParser = require("body-parser");
var typeorm_1 = require("typeorm");
var appConfig = require("../infrastructure/common/app.config");
var container_1 = require("../infrastructure/ioc/container");
require("./controllers/index");
var swaggerUi = require('swagger-ui-express');
var swaggerDocument = require("./swagger.json");
var nocache = require('nocache');
var app = express();
/**
 * Register body parser middlewares
 */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(nocache());
app.set("port", process.env.PORT || 8080);
/**
 * Wrapper for express server
 */
var server = new inversify_express_utils_1.InversifyExpressServer(container_1.default, null, { rootPath: '/api' }, app);
/**
 * Applies all routes & configurations to the server
 * @returns express Application
 */
var appConfigured = server.build();
/**
 * Listen for connections
 */
var serve = appConfigured.listen(app.get("port"), function () {
    console.log(("  App is running at http://localhost:%d in %s mode"), app.get("port"), app.get("env"));
    console.log("  Press CTRL-C to stop\n");
});
/**
 * Establish database connection
*/
typeorm_1.createConnection(appConfig.dbOptions).then(function (connection) { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        console.log("Connected to DB");
        return [2 /*return*/];
    });
}); }).catch(function (error) { return console.log("TypeORM connection error: ", error); });
/**
 * export app
 */
module.exports = app;
//# sourceMappingURL=index.js.map