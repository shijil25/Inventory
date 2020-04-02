import { ILoggerService } from './../interfaces/ilogger.service';
import * as express from 'express';
import { interfaces, controller, httpGet, request, response, httpPost, httpPut } from 'inversify-express-utils';
import { inject } from 'inversify';
import TYPES from '../ioc/types';
import { Product } from '../entities/product.entity';
import { Cart } from '../entities/cart.entity';
import { IProductRepository } from '../interfaces/iproduct.repository';
import { User } from './../entities/user.entity';
import { ICartRepository } from '../interfaces/icart.repository';

/**
 * Cart Controller
 */
@controller('/carts')
export class CartController implements interfaces.Controller {

    private cartRepository : ICartRepository;
    private productRepository : IProductRepository;
    private loggerService : ILoggerService;

    /**
     * Creates an instance of cart controller.
     * @param cartRepository 
     * @param productRepository 
     * @param loggerService
     */
    constructor(@inject(TYPES.ICartRepository) cartRepository : ICartRepository,
                @inject(TYPES.IProductRepository) productRepository : IProductRepository,
                @inject(TYPES.ILoggerService) loggerService : ILoggerService) {
        this.cartRepository = cartRepository;
        this.productRepository = productRepository;
        this.loggerService = loggerService;
    }

    /**
     * Https get
     * @param req 
     * @param res 
     */
    @httpGet('/:id')    
    public async getOrder(@request() req : express.Request , @response() res : express.Response) {
        try {
            const cart = await this.cartRepository.findById(+req.params.id);
            if(!cart){
                res.status(404).json("No cart found");
            } else {
                res.status(200).json(cart);
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
    public async postCart(@request() req : express.Request , @response() res : express.Response) {
        try {
            let product =  new Product();
            product.ProdID = req.body.productId;

            let user = new User();
            user.UserId = req.body.userId;

            let cart = new Cart();
            cart.Quantity = req.body.quantity;         
            cart.Product = product;            
            cart.User = user;

            let prod = await this.productRepository.findById(req.body.productId);
            if(prod && prod.ProdCount >= +req.body.quantity)
            {
                const result = await this.cartRepository.create(cart);
                res.status(200).json(result);
            }
            else {
                let errorMessage = 'Product stock is very less';
                this.loggerService.logError(errorMessage);
                res.status(400).json(errorMessage);
            }
        } catch(error) {
            console.log(error);
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
    public async putCart(@request() req : express.Request , @response() res : express.Response) {
        try {
            let cart = await this.cartRepository.findById(+req.params.id);
            if(cart)
            {
                let newCart = new Cart();
                newCart.Quantity = req.body.quantity;
                newCart.Total = cart.Product.Price * req.body.quantity;
                const result = await this.cartRepository.update(cart.CartID, newCart);
                res.status(200).json('Cart updated successfully');
            } else {
                res.status(400).json('Something went wrong');
            }
        } catch(error) {
            console.log(error);
            this.loggerService.logError(JSON.stringify(error));
            res.status(400).json(error);
        }
    }
}