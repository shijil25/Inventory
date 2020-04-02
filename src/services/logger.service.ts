import { ILoggerService } from './../interfaces/ilogger.service';
import { injectable } from 'inversify';
var log4js = require('log4js');

@injectable()
export class LoggerService implements ILoggerService {
    constructor() {
        log4js.configure({ 
            appenders: { error: { type: 'file', filename: 'error.log' } },
            categories: { default: { appenders: ['error'], level: 'error' } }       
        });
    }

    logInformation(info : string) {
        const logger = log4js.getLogger();
        logger.level = 'info';
        logger.info(info);
    }

    logDebug(message : string) {
        const logger = log4js.getLogger('error');
        logger.debug(message);
    }

    logError(errorMessage : string) {
        const logger = log4js.getLogger('error');
        logger.error(errorMessage);
    }
}