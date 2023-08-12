import { UpdatePasswordDTO } from '../dtos/update-password.dto';

export const updatePasswordMock: UpdatePasswordDTO = {
  lastPassword: 'abc',
  newPassaword: 'qwerty',
};

export const updatePassworInvaliddMock: UpdatePasswordDTO = {
  lastPassword: 'absdfasc',
  newPassaword: 'ewqrwffd',
};
