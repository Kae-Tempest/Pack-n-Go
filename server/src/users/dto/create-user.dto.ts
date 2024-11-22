import { Exclude } from 'class-transformer';

export class CreateUserDto {
  id?: number;
  first_name: string;
  last_name: string;
  @Exclude()
  password: string;
  email: string;
}
