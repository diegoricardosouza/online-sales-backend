import { UserEntity } from '../entities/user.entity';
import { UserType } from '../enum/user-type.enum';

export const userEntityMock: UserEntity = {
  cpf: '2142143124',
  createdAt: new Date(),
  email: 'emailmock@email.com',
  id: 4324,
  name: 'nameMock',
  password: 'largePassword',
  phone: '13123324423',
  typeUser: UserType.User,
  updatedAt: new Date(),
};
