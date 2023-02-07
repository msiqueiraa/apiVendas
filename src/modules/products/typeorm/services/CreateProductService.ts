import AppError from '@shared/errors/appErros';
import { getCustomRepository } from 'typeorm';
import Product from '../entities/Product';
import { ProductRepository } from '../repositories/ProductsRepository';

interface IRequest {
  name: string;
  price: number;
  quantity: number;
}

export class CreateProductService {
  public async execute({ name, price, quantity }: IRequest): Promise<Product> {
    const productsRepository = getCustomRepository(ProductRepository);
    const productExists = await productsRepository.findByName(name);

    if (productExists) {
      throw new AppError('There is already one product whit this name');
    }
    const product = productsRepository.create({ name, price, quantity });

    await productsRepository.save(product);

    return product;
  }
}
