import { ICartService } from './../../core/interfaces/icart.service';
import { ILoggerService } from '../../core/interfaces/ilogger.service';
import * as express from 'express';
import { interfaces, controller, httpGet, request, response, httpPost, httpPut } from 'inversify-express-utils';
import { inject } from 'inversify';
import TYPES from '../../infrastructure/ioc/types';

/**
 * Cart Controller
 */
@controller('/carts')
export class CartController implements interfaces.Controller {

    private _cartService: ICartService;
    private _loggerService: ILoggerService;

    /**
     * Creates an instance of cart controller.
     * @param cartRepository 
     * @param productRepository 
     * @param loggerService
     */
    constructor(@inject(TYPES.ICartService) cartService: ICartService,
        @inject(TYPES.ILoggerService) loggerService: ILoggerService) {
        this._cartService = cartService;
        this._loggerService = loggerService;
    }

    /**
     * Https get
     * @param req 
     * @param res 
     */
    @httpGet('/:id')
    public async getOrder(@request() req: express.Request, @response() res: express.Response) {
        try {
            const response = await this._cartService.findById(+req.params.id);
            if (!response.IsSuccess) {
                res.status(404).json(response.ErrorMessage);
            } else {
                res.status(200).json(response.Data);
            }
        } catch (error) {
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
    public async postCart(@request() req: express.Request, @response() res: express.Response) {
        try {
            const result = await this._cartService.create(req.body.userId, req.body.productId, req.body.quantity);
            if (result.IsSuccess) {
                res.status(200).json(result.Data);
            } else {
                this._loggerService.logError(result.ErrorMessage);
                res.status(400).json(result.ErrorMessage);
            }
        } catch (error) {
            console.log(error);
            this._loggerService.logError(JSON.stringify(error));
            res.status(400).json(error);
        }
    }

    /**
     * Https put
     * @param req 
     * @param res 
     */
    @httpPut('/:id')
    public async putCart(@request() req: express.Request, @response() res: express.Response) {
        try {
            const result = await this._cartService.update(+req.params.id, req.body.quantity);
            if (result.IsSuccess) {
                res.status(200).json('Cart updated successfully');
            } else {
                res.status(400).json(result.ErrorMessage);
            }
        } catch (error) {
            this._loggerService.logError(JSON.stringify(error));
            res.status(400).json(error);
        }
    }
}