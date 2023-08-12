import { categoryMock } from '../../category/__mocks__/category.mock';
import { UpdateProductDto } from '../dtos/update-product.dto';

export const updateproductMock: UpdateProductDto = {
  categoryId: categoryMock.id,
  image: 'qwertynkjfav23ji',
  name: 'name mock update product',
  price: 35.0,
};
