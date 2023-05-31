import { cityMock } from '../../city/__mocks__/city.mock';
import { AddressEntity } from '../entities/address.entity';
import { userEntityMock } from '../../user/__mocks__/user.mock';

export const addressMock: AddressEntity = {
  cep: '2342234',
  cityId: cityMock.id,
  complement: 'asdas',
  createdAt: new Date(),
  id: 5345,
  numberAddress: 7688,
  updatedAt: new Date(),
  userId: userEntityMock.id,
};
