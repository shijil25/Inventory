import { ILoggerService, IEventPublishService } from '../interfaces/index';
import { Order } from '../../data/entities/index';
import { injectable, inject } from 'inversify';
import TYPES from '../../infrastructure/ioc/types';
var azure = require('azure');

@injectable()
export class EventPublishService implements IEventPublishService {

    private logService : ILoggerService;

    constructor(@inject(TYPES.ILoggerService) logService : ILoggerService) {
        this.logService = logService;
    }

    async publish(order : Order) {
        const queueName = process.env.QUEUE_NAME;
        const connectionString = process.env.AZURE_SERVICE_BUS;
        var serviceBusService = azure.createServiceBusService(connectionString);
        let thisClass = this;

        try {
            const message= {
                body:  JSON.stringify(order)
            };
            
            serviceBusService.sendQueueMessage(queueName, message, function(error){
                if(error) {
                    thisClass.logService.logError(error.detail);
                }
            });
        } 
        catch(error)
        {
            this.logService.logError(JSON.stringify(error));
        }
    }
}