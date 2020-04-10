import { ProductDTO } from './../../core/dto/index';
import { ILoggerService, IProductService } from '../../core/interfaces/index';
import * as express from 'express';
import { interfaces, controller, httpGet, request, response, httpPost, httpPut, httpDelete } from 'inversify-express-utils';
import { inject } from 'inversify';
import TYPES from '../../infrastructure/ioc/types';

/**
 * Product Controller
 */
@controller('/products')
export class ProductController implements interfaces.Controller {

    private productService: IProductService;
    private loggerService: ILoggerService;

    /**
     * Creates an instance of product controller.
     * @param productService 
     */
    constructor(@inject(TYPES.IProductService) productService: IProductService,
        @inject(TYPES.ILoggerService) loggerService: ILoggerService) {
        this.productService = productService;
        this.loggerService = loggerService;
    }

    /**
     * Https get
     * @param req 
     * @param res 
     */
    @httpGet('/')
    public async getProducts(@request() req: express.Request, @response() res: express.Response) {
        try {
            const response = await this.productService.findAll();
            if (!response.IsSuccess) {
                res.status(404).json(response.ErrorMessage);
            } else {
                res.status(200).json(response.Data);
            }
        } catch (error) {
            this.loggerService.logError(JSON.stringify(error));
            res.status(400).json(error);
        }
    }

    /**
     * Https get
     * @param req 
     * @param res 
     */
    @httpGet('/:id')
    public async getProduct(@request() req: express.Request, @response() res: express.Response) {
        try {
            const response = await this.productService.findById(+req.params.id);
            if (!response.IsSuccess) {
                res.status(404).json(response.ErrorMessage);
            } else {
                res.status(200).json(response.Data);
            }
        } catch (error) {
            this.loggerService.logError(JSON.stringify(error));
            res.status(400).json(error);
        }
    }

    /**
     * Https post
     * @param req 
     * @param res 
     */
    @httpPost('/')
    public async postProduct(@request() req: express.Request, @response() res: express.Response) {
        try {
            let product = new ProductDTO(0, req.body.name, req.body.description, req.body.price, req.body.productCount);
            const response = await this.productService.create(product);
            if (!response.IsSuccess) {
                res.status(400).json(response.ErrorMessage);
            } else {
                res.status(200).json(response.Data);
            }
        } catch (error) {
            this.loggerService.logError(JSON.stringify(error));
            res.status(400).json(error);
        }
    }

    /**
     * Https put
     * @param req 
     * @param res 
     */
    @httpPut('/:id')
    public async putProduct(@request() req: express.Request, @response() res: express.Response) {
        try {
            let product = new ProductDTO(0, req.body.name, req.body.description, req.body.price, req.body.productCount);
            const result = await this.productService.update(+req.params.id, product);
            if (result.IsSuccess) {
                res.status(200).json(result.Data);
            } else {
                res.status(400).json(result.ErrorMessage);
            }
        } catch (error) {
            this.loggerService.logError(JSON.stringify(error));
            res.status(400).json(error);
        }
    }

    /**
     * Https delete
     * @param req 
     * @param res 
     */
    @httpDelete('/:id')
    public async deleteProduct(@request() req: express.Request, @response() res: express.Response) {
        try {
            const result = await this.productService.delete(+req.params.id);
            if (result.IsSuccess) {
                res.status(200).json('Successfully deleted!');
            } else {
                res.status(400).json(result.ErrorMessage);
            }
        } catch (error) {
            this.loggerService.logError(JSON.stringify(error));
            res.status(400).json(error);
        }
    }
}