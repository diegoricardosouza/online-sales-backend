import { compare, hash } from 'bcrypt';

export const createPasswordHashed = async (
  password: string,
): Promise<string> => {
  const salt = 10;
  return await hash(password, salt);
};

export const validatePassword = async (
  password: string,
  passwordHashed: string,
): Promise<boolean> => {
  return compare(password, passwordHashed);
};
