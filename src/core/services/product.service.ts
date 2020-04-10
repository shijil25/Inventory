import { inject, injectable } from 'inversify';
import { ResponseData, Response, ProductDTO } from './../dto/index';
import { IProductRepository } from './../../data/interfaces/index';
import { Product } from '../../data/entities/index';
import { IEntityDataMapper, IProductService } from '../interfaces/index';
import TYPES from '../../infrastructure/ioc/types';

@injectable()
export class ProductService implements IProductService {

    private _productRepository: IProductRepository;
    private _productDataMapper: IEntityDataMapper<ProductDTO, Product>;

    constructor(@inject(TYPES.IProductRepository) productRepository: IProductRepository,
        @inject(TYPES.IProductDataMapper) productDataMapper: IEntityDataMapper<ProductDTO, Product>) {
        this._productRepository = productRepository;
        this._productDataMapper = productDataMapper;
    }

    async findAll(): Promise<ResponseData<ProductDTO[]>> {
        let products = await this._productRepository.findAll();
        let productDtos = products ? products.map(product => this._productDataMapper.mapToDomain(product)) : null;
        let response = new ResponseData<ProductDTO[]>();
        response.Data = productDtos;
        response.ErrorMessage = productDtos ? null : 'No Products Found';
        response.IsSuccess = !!productDtos;
        return response;
    }

    async findById(id: number): Promise<ResponseData<ProductDTO>> {
        let product = await this._productRepository.findById(id);
        let productDto = product? this._productDataMapper.mapToDomain(product) : null;
        let response = new ResponseData<ProductDTO>();
        response.Data = productDto;
        response.ErrorMessage = productDto ? null : 'No Product Found';
        response.IsSuccess = !!productDto;
        return response;
    }

    async create(productDto: ProductDTO): Promise<ResponseData<ProductDTO>> {
        let productEntity = this._productDataMapper.mapToEntity(productDto);
        let product = await this._productRepository.create(productEntity);
        let newProduct = this._productDataMapper.mapToDomain(product);
        let response = new ResponseData<ProductDTO>();
        response.Data = newProduct;
        response.ErrorMessage = newProduct ? null : 'Something went wrong';
        response.IsSuccess = !!newProduct;
        return response;
    }

    async update(id: number, productDto: ProductDTO): Promise<ResponseData<ProductDTO>> {
        let response = new ResponseData<ProductDTO>();
        let productEntity = this._productDataMapper.mapToEntity(productDto);
        let result = await this._productRepository.update(id, productEntity);
        if (result) {
            let product = await this._productRepository.findById(id);
            let newProduct = this._productDataMapper.mapToDomain(product);
            response.Data = newProduct;
            response.IsSuccess = true;
        } else {
            response.ErrorMessage = 'Something went wrong';
            response.IsSuccess = false;
        }
        return response;
    }

    async delete(id: number): Promise<Response> {
        let result = await this._productRepository.delete(id);
        let response = new Response();
        if (result) {
            response.IsSuccess = true;
        } else {
            response.ErrorMessage = 'Something went wrong';
            response.IsSuccess = false;
        }
        return response;
    }

}