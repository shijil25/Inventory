import { inject, injectable } from 'inversify';
import { ResponseData, OrderDTO } from './../dto/index';
import { IOrderRepository } from './../../data/interfaces/index';
import { Order, User } from '../../data/entities/index';
import { IEntityDataMapper, IOrderService } from '../interfaces/index';
import TYPES from '../../infrastructure/ioc/types';
import { IEventPublishService } from '../interfaces/index';

@injectable()
export class OrderService implements IOrderService {

    private _orderRepository: IOrderRepository;
    private _eventPublishService : IEventPublishService;
    private _orderDataMapper: IEntityDataMapper<OrderDTO, Order>;

    constructor(@inject(TYPES.IOrderRepository) orderRepository: IOrderRepository,
        @inject(TYPES.IEventPublishService) eventPublishService : IEventPublishService,
        @inject(TYPES.IOrderDataMapper) orderDataMapper: IEntityDataMapper<OrderDTO, Order>) {
        this._orderRepository = orderRepository;
        this._orderDataMapper = orderDataMapper;
        this._eventPublishService = eventPublishService;
    }

    async findAll(): Promise<ResponseData<OrderDTO[]>> {
        let orders = await this._orderRepository.findAll();
        let orderDtos = orders ? orders.map(order => this._orderDataMapper.mapToDomain(order)) : null;
        let response = new ResponseData<OrderDTO[]>();
        response.Data = orderDtos;
        response.ErrorMessage = orderDtos ? null : 'No Orders Found';
        response.IsSuccess = !!orderDtos;
        return response;
    }

    async findById(id: number): Promise<ResponseData<OrderDTO>> {
        let order = await this._orderRepository.findById(id);
        let orderDto = this._orderDataMapper.mapToDomain(order);
        let response = new ResponseData<OrderDTO>();
        response.Data = orderDto;
        response.ErrorMessage = orderDto ? null : 'No Order Found';
        response.IsSuccess = !!orderDto;
        return response;
    }

    async findByUser(userId : number): Promise<ResponseData<OrderDTO[]>> {
        let orders = await this._orderRepository.findByCustomer(userId);
        let orderDtos = orders ? orders.map(order => this._orderDataMapper.mapToDomain(order)) : null;
        let response = new ResponseData<OrderDTO[]>();
        response.Data = orderDtos;
        response.ErrorMessage = orderDtos ? null : 'No Orders Found';
        response.IsSuccess = !!orderDtos;
        return response;
    }

    async create(userId: number): Promise<ResponseData<OrderDTO>> {
        let response = new ResponseData<OrderDTO>();
        let user = new User();
        user.UserId = userId;
        let order = new Order();
        order.User = user;
        const result: {
            OrderId: number,
            Total: number,
            OrderDate: Date
        } = await this._orderRepository.create(order);
        const newOrder = await this._orderRepository.findById(result[0].OrderId);
        if (newOrder) {
            this._eventPublishService.publish(newOrder);
        }
        let orderDto = newOrder ? this._orderDataMapper.mapToDomain(newOrder) : null;
        response.Data = orderDto;
        response.ErrorMessage = orderDto ? null : 'Something went wrong';
        response.IsSuccess = !!orderDto;
        return response;
    }
}