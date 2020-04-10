import "reflect-metadata";
import * as express from 'express';
require('dotenv').config();
import { InversifyExpressServer } from 'inversify-express-utils';
import * as bodyParser from "body-parser";
import { createConnection } from "typeorm";
import * as appConfig from "../infrastructure/common/app.config";
import container from '../infrastructure/ioc/container';
import './controllers/index';
const swaggerUi = require('swagger-ui-express');
import * as swaggerDocument  from './swagger.json';
const nocache = require('nocache');

const app = express();

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
let server = new InversifyExpressServer(container, null, { rootPath: '/api' }, app);

/**
 * Applies all routes & configurations to the server
 * @returns express Application
 */
let appConfigured = server.build();

/**
 * Listen for connections
 */
let serve = appConfigured.listen(app.get("port"), () => {
    console.log(("  App is running at http://localhost:%d in %s mode"), app.get("port"), app.get("env"));
    console.log("  Press CTRL-C to stop\n");
});

/** 
 * Establish database connection
*/
createConnection(appConfig.dbOptions).then(async connection => {
    console.log("Connected to DB");
}).catch(error => console.log("TypeORM connection error: ", error));

/**
 * export app
 */
module.exports = app; 