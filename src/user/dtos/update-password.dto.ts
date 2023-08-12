import { IsString } from 'class-validator';

export class UpdatePasswordDTO {
  @IsString()
  newPassaword: string;

  @IsString()
  lastPassword: string;
}
