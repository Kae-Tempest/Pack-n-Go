import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/Users.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  public async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  public async findOneByID(id: number): Promise<User> {
    return this.userRepository.findOneBy({ id: id });
  }

  public async findOnebyEmail(email: string): Promise<User> {
    return this.userRepository.findOneBy({ email: email });
  }

  public async update(id: number, data: UpdateUserDto): Promise<User> {
    const user: User = await this.userRepository.findOneBy({ id: id });
    user.email = data.email;
    user.first_name = data.first_name;
    user.last_name = data.last_name;
    user.password = data.password;
    return this.userRepository.save(user);
  }

  public async delete(id: number): Promise<User> {
    const user: User = await this.userRepository.findOneBy({ id: id });
    return this.userRepository.remove(user);
  }

  public async create(user: CreateUserDto): Promise<User> {
    try {
      if (!this.userRepository) {
        throw new Error('User repository is not properly injected');
      }
      const savedUser = await this.userRepository.save(user);
      return savedUser;
    } catch (err) {
      console.error('Error in user service:', err);
      throw err;
    }
  }
}
