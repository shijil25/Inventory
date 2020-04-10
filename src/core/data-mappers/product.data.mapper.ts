import { ProductDTO } from './../dto/index';
import { injectable } from 'inversify';
import { User, Product, Cart } from '../../data/entities/index';
import { IEntityDataMapper } from '../interfaces/index';

@injectable()
export class ProductDataMapper implements IEntityDataMapper<ProductDTO, Product> {
    mapToDomain(entity: Product): ProductDTO {
        let productDto = new ProductDTO(entity.ProdID, entity.Name, entity.Description, entity.Price, entity.ProdCount);
        return productDto;
    }
    mapToEntity(domain: ProductDTO): Product {
        let product = new Product();
        if(domain.ProdID > 0) {
            product.ProdID = domain.ProdID;
        }
        product.ProdCount = domain.ProdCount;
        product.Price = domain.Price;
        product.Name = domain.Name;
        product.Description = domain.Description;
        return product;
    }
}