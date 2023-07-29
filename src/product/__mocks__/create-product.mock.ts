import { categoryMock } from '../../category/__mocks__/category.mock';
import { CreateProductDto } from '../dtos/create-product.dto';

export const createproductMock: CreateProductDto = {
  categoryId: categoryMock.id,
  image: 'jaslkdjfaskld;jfasklfjasfoias',
  name: 'name mock product',
  price: 25.0,
};
