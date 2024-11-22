import {
  HttpException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthPayloadDto } from './dto/auth.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/Users.entity';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import * as crypto from 'crypto';
import { RegisterPayloadDto } from './dto/register.dto';
import { UsersService } from 'src/users/users.service';

const salt = Buffer.from(process.env.SALT, 'hex');

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  public async validateUser({
    email,
    password,
  }: AuthPayloadDto): Promise<{ message: string; token: string }> {
    try {
      const findUser = await this.userRepository.findOneBy({
        email: email,
      });
      if (!findUser) return null;

      const hashedPassword: string = crypto
        .pbkdf2Sync(password, salt, 310000, 32, 'sha256')
        .toString('hex');

      if (hashedPassword !== findUser.password) {
        console.error('Invalid Password');
        throw new UnauthorizedException('Invalid email or password');
      }

      const userForToken = {
        id: findUser.id,
        email: findUser.email,
        first_name: findUser.first_name,
        last_name: findUser.last_name,
      };
      const token: string = this.jwtService.sign(userForToken);
      return { message: 'Login succesful', token };
    } catch (err) {
      console.error('Login failed:', err);
      throw err;
    }
  }

  public async createUser(
    authPayload: RegisterPayloadDto,
  ): Promise<{ message: string; token: string }> {
    try {
      if (authPayload.password !== authPayload.confirm_password)
        throw new HttpException('Password do not match !', 400);
      const existingUser = await this.userRepository.findOneBy({
        email: authPayload.email,
      });
      if (existingUser)
        throw new HttpException('Error during registration', 403);
      const { confirm_password, ...user } = authPayload;
      user.password = crypto
        .pbkdf2Sync(user.password, salt, 310000, 32, 'sha256')
        .toString('hex');
      const newUser = await this.userService.create(user);

      const userForToken = {
        id: newUser.id,
        email: newUser.email,
        first_name: newUser.first_name,
        lest_name: newUser.last_name,
      };

      const token: string = await this.jwtService.signAsync(userForToken);
      return { message: 'Resgistration succesful', token };
    } catch (err) {
      console.error('Registration failed', err);
      throw err;
    }
  }
}
