import { inject, injectable } from 'inversify';
import { ResponseData, Response, CartDTO } from './../dto/index';
import { IProductRepository, ICartRepository } from './../../data/interfaces/index';
import { Cart } from '../../data/entities/index';
import { IEntityDataMapper, ICartService } from '../interfaces/index';
import TYPES from '../../infrastructure/ioc/types';

@injectable()
export class CartService implements ICartService {

    private _cartRepository: ICartRepository;
    private _productRepository: IProductRepository;
    private _cartDataMapper: IEntityDataMapper<CartDTO, Cart>;

    constructor(@inject(TYPES.ICartRepository) cartRepository: ICartRepository,
        @inject(TYPES.IProductRepository) productRepository: IProductRepository,
        @inject(TYPES.ICartDataMapper) cartDataMapper: IEntityDataMapper<CartDTO, Cart>) {
        this._cartRepository = cartRepository;
        this._productRepository = productRepository;
        this._cartDataMapper = cartDataMapper;
    }

    async findAll(): Promise<ResponseData<CartDTO[]>> {
        let carts = await this._cartRepository.findAll();
        let cartDtos = carts ? carts.map(cart => this._cartDataMapper.mapToDomain(cart)) : null;
        let response = new ResponseData<CartDTO[]>();
        response.Data = cartDtos;
        response.ErrorMessage = cartDtos ? null : 'No Carts Found';
        response.IsSuccess = !!cartDtos;
        return response;
    }

    async findById(id: number): Promise<ResponseData<CartDTO>> {
        let cart = await this._cartRepository.findById(id);
        let cartDto = cart ? this._cartDataMapper.mapToDomain(cart) : null;
        let response = new ResponseData<CartDTO>();
        response.Data = cartDto;
        response.ErrorMessage = cartDto ? null : 'No Cart Found';
        response.IsSuccess = !!cartDto;
        return response;
    }

    async create(userId: number, productId: number, quantity: number): Promise<ResponseData<CartDTO>> {
        let response = new ResponseData<CartDTO>();
        let prod = await this._productRepository.findById(productId);
        if (prod && prod.ProdCount >= quantity) {
            let cartDTO = new CartDTO(0, productId, userId, quantity, 0);
            let cartEntity = this._cartDataMapper.mapToEntity(cartDTO);
            const result: {
                CartID: number,
                Quantity: number,
                Total: number
            } = await this._cartRepository.create(cartEntity);
            let cart = await this._cartRepository.findById(result[0].CartID);
            let cartDto = cart ? this._cartDataMapper.mapToDomain(cart) : null;
            response.Data = cartDto;
            response.ErrorMessage = cartDto ? null : 'Something went wrong';
            response.IsSuccess = !!cartDto;
        } else {
            response.ErrorMessage = 'Product stock is very less';
            response.IsSuccess = false;
        }
        return response;
    }

    async update(id: number, quantity: number): Promise<ResponseData<CartDTO>> {
        let response = new ResponseData<CartDTO>();
        let cart = await this._cartRepository.findById(id);
        if (cart) {
            let newCart = new Cart();
            newCart.Quantity = quantity;
            newCart.Total = cart.Product.Price * quantity;
            const result = await this._cartRepository.update(id, newCart);
            let cartDto = result ? this._cartDataMapper.mapToDomain(cart) : null;
            response.Data = cartDto;
            response.ErrorMessage = cartDto ? null : 'Something went wrong';
            response.IsSuccess = !!cartDto;
        } else {
            response.ErrorMessage = 'Something went wrong';
            response.IsSuccess = false;
        }
        return response;
    }

    async delete(id: number): Promise<Response> {
        const result = await this._cartRepository.delete(id);
        let response = new Response();
        response.IsSuccess = !!result;
        response.ErrorMessage = result ? null : 'Something went wrong';
        return response;
    }
}