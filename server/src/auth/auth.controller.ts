import {
  Body,
  Controller,
  Get,
  HttpException,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { AuthPayloadDto } from './dto/auth.dto';
import { AuthService } from './auth.service';
import { Request, Response } from 'express';
import { JwtAuthGuard } from './guards/jwt.guard';
import { RegisterPayloadDto } from './dto/register.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(
    @Body() { email, password }: AuthPayloadDto,
    @Res({ passthrough: true }) response: Response,
  ): Promise<void> {
    try {
      const { message, token } = await this.authService.validateUser({
        email,
        password,
      });
      if (token) {
        response
          .status(200)
          .header('Acces-control-Allow-Credentilas', 'true')
          .send({ message, token });
      } else {
        response.status(401);
      }
    } catch (err) {
      console.error('Login failed', err);
      throw new HttpException(
        {
          message: 'Login failed',
          error: err.message,
        },
        401,
      );
    }
  }

  @Post('register')
  async register(
    @Body() user: RegisterPayloadDto,
    @Res({ passthrough: true }) response: Response,
  ): Promise<void> {
    try {
      const { token } = await this.authService.createUser(user);
      if (token) {
        response.status(201).send({ message: 'Registration succesful', token });
      }
    } catch (err) {
      console.error('Registration failed', err);
      throw new HttpException(
        {
          message: 'Registration failed',
          error: err.message,
        },
        401,
      );
    }
  }

  @Get('status')
  @UseGuards(JwtAuthGuard)
  public async status(@Req() req: Request) {
    return req.user;
  }
}
