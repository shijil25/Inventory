import { IOrderService,ILoggerService,IEventPublishService } from './../../core/interfaces/index';
import * as express from 'express';
import { interfaces, controller, httpGet, request, response, httpPost } from 'inversify-express-utils';
import { inject } from 'inversify';
import TYPES from '../../infrastructure/ioc/types';

/**
 * Order Controller
 */
@controller('/orders')
export class OrderController implements interfaces.Controller {

    private _eventPublishService : IEventPublishService;
    private _loggerService : ILoggerService;
    private _orderService : IOrderService;

    /**
     * Creates an instance of order controller.
     * @param cartRepository 
     * @param orderRepository 
     */
    constructor(@inject(TYPES.IOrderService) orderService : IOrderService,
                @inject(TYPES.IEventPublishService) eventPublishService : IEventPublishService,
                @inject(TYPES.ILoggerService) loggerService : ILoggerService) {
        this._orderService = orderService;
        this._eventPublishService = eventPublishService;
        this._loggerService = loggerService;
    }

    /**
     * Https get
     * @param req 
     * @param res 
     */
    @httpGet('/:id')
    public async getOrder(@request() req : express.Request , @response() res : express.Response) {
        try {
            const result = await this._orderService.findById(+req.params.id);
            if(!result.IsSuccess){
                res.status(404).json(result.ErrorMessage);
            } else {
                res.status(200).json(result.Data);
            }
        } catch(error) {
            this._loggerService.logError(JSON.stringify(error));
            res.status(400).json(error);
        }
    }

    /**
     * Https get
     * @param req 
     * @param res 
     */
    @httpGet('/CustomerOrder/:id')
    public async getCustomerOrder(@request() req : express.Request , @response() res : express.Response) {
        try {
            const result = await this._orderService.findByUser(+req.params.id);
            if(!result.IsSuccess){
                res.status(404).json(result.ErrorMessage);
            } else {
                res.status(200).json(result.Data);
            }
        } catch(error) {
            console.log(error);
            this._loggerService.logError(JSON.stringify(error));
            res.status(400).json(error);
        }
    }

    /**
     * Https post
     * @param req 
     * @param res 
     */
    @httpPost('/')
    public async postOrder(@request() req : express.Request , @response() res : express.Response) {
        try {
            let result = await this._orderService.create(req.body.userId);
            if(!result.IsSuccess) {
                res.status(404).json(result.ErrorMessage);
            } else {
            res.status(200).json(result.Data);
            }
        } catch(error) {
            console.log(error);
            this._loggerService.logError(JSON.stringify(error));
            res.status(400).json(error);
        }
    }
}