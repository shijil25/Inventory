import { ILoggerService } from './../interfaces/ilogger.service';
import * as express from 'express';
import { interfaces, controller, httpGet, request, response, httpPost, httpPut, httpDelete } from 'inversify-express-utils';
import { inject } from 'inversify';
import TYPES from '../ioc/types';
import { Product } from '../entities/product.entity';
import { IProductRepository } from '../interfaces/iproduct.repository';

/**
 * Product Controller
 */
@controller('/products')
export class ProductController implements interfaces.Controller {

    private productRepository : IProductRepository;
    private loggerService : ILoggerService;

    /**
     * Creates an instance of product controller.
     * @param productRepository 
     */
    constructor(@inject(TYPES.IProductRepository) productRepository : IProductRepository,
                @inject(TYPES.ILoggerService) loggerService : ILoggerService) {
        this.productRepository = productRepository;
        this.loggerService = loggerService;
    }

    /**
     * Https get
     * @param req 
     * @param res 
     */
    @httpGet('/')
    public async getProducts(@request() req : express.Request , @response() res : express.Response) {
        try {
            const product = await this.productRepository.findAll();
            if(!product){
                res.status(404).json("No products found");
            } else {
                res.status(200).json(product);
            }
        } catch(error) {
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
    public async getProduct(@request() req : express.Request , @response() res : express.Response) {
        try {
            const product = await this.productRepository.findById(+req.params.id);
            if(!product){
                res.status(404).json("No product found");
            } else {
                res.status(200).json(product);
            }
        } catch(error) {
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
    public async postProduct(@request() req : express.Request , @response() res : express.Response) {
        try {
            let product = new Product();
            product.Description= req.body.description;
            product.Name = req.body.name;
            product.Price = req.body.price;
            product.ProdCount = req.body.productCount;

            const newproduct = await this.productRepository.create(product);
            res.status(200).json(newproduct);
        } catch(error) {
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
    public async putProduct(@request() req : express.Request , @response() res : express.Response) {
        try {
            let product = new Product();
            product.Description= req.body.description;
            product.Name = req.body.name;
            product.Price = req.body.price;
            product.ProdCount = req.body.productCount;

            const result = await this.productRepository.update(+req.params.id, product);
            if(result) {
                res.status(200).json(req.body);
            } else {
                res.status(400).json('Something went wrong');
            }
        } catch(error) {
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
    public async deleteProduct(@request() req : express.Request , @response() res : express.Response) {
        try {
            console.log('inside delete');
            const result = await this.productRepository.delete(+req.params.id);
            console.log(result);
            if(result) {
                res.status(200).json('Successfully deleted!');
            } else {
                res.status(400).json('Something went wrong');
            }
        } catch(error) {
            this.loggerService.logError(JSON.stringify(error));
            res.status(400).json(error);
        }
    }
}