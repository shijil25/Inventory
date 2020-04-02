import { ILoggerService } from './../interfaces/ilogger.service';
import { Order } from './../entities/order.entity';
import { IEventPublishService } from '../interfaces/ievent-publish.service';
import { injectable, inject } from 'inversify';
import TYPES from '../ioc/types';
var azure = require('azure');

@injectable()
export class EventPublishService implements IEventPublishService {

    private logService : ILoggerService;

    constructor(@inject(TYPES.ILoggerService) logService : ILoggerService) {
        this.logService = logService;
    }

    async publish(order : Order) {
        const queueName = "inventoryqueue";
        const connectionString = "Endpoint=sb://inventorysystem.servicebus.windows.net/;SharedAccessKeyName=RootManageSharedAccessKey;SharedAccessKey=mRbRM6AZDmEgBm0UAE5dnPXuo1Cf+WuKFU61qthML+8=";
        var serviceBusService = azure.createServiceBusService(connectionString);

        try {
            const message= {
                body:  JSON.stringify(order)
            };
            
            serviceBusService.sendQueueMessage(queueName, message, function(error){
                if(!error) {
                    
                } else {
                    console.log(error);
                }
            });
        } 
        catch(error)
        {
            this.logService.logError(JSON.stringify(error));
            console.log(error);
        }
    }
}