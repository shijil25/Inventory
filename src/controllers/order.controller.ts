import * as express from 'express';
import { interfaces, controller, httpGet, request, response, httpPost } from 'inversify-express-utils';
import { inject } from 'inversify';
import TYPES from '../ioc/types';
import { User } from './../entities/user.entity';
import { Order } from './../entities/order.entity';
import { IOrderRepository } from './../repositories/iorder.repository';
import { ICartRepository } from './../repositories/icart.repository';

/**
 * Order Controller
 */
@controller('/orders')
export class OrderController implements interfaces.Controller {

    private cartRepository : ICartRepository;
    private orderRepository : IOrderRepository;

    /**
     * Creates an instance of order controller.
     * @param cartRepository 
     * @param orderRepository 
     */
    constructor(@inject(TYPES.ICartRepository) cartRepository : ICartRepository,
                @inject(TYPES.IOrderRepository) orderRepository : IOrderRepository) {
        this.cartRepository = cartRepository;
        this.orderRepository = orderRepository;
    }

    /**
     * Https get
     * @param req 
     * @param res 
     */
    @httpGet('/:id')
    public async getOrder(@request() req : express.Request , @response() res : express.Response) {
        try {
            const order = await this.orderRepository.findById(+req.params.id);
            if(!order){
                res.status(404).json("No order found");
            } else {
                res.status(200).json(order);
            }
        } catch(error) {
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
            const orders = await this.orderRepository.findByCustomer(+req.params.id);
            if(!orders){
                res.status(404).json("No order found");
            } else {
                res.status(200).json(orders);
            }
        } catch(error) {
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
            let order = new Order();
            let user = new User();
            user.UserId = req.body.userId;
            order.User = user;
            const result = await this.orderRepository.create(order);
            res.status(200).json(result);
        } catch(error) {
            res.status(400).json(error);
        }
    }
}