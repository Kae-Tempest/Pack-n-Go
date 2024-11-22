import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { map, Observable } from 'rxjs';
import { User } from 'src/entities/Users.entity';

@Injectable()
export class UserInterceptor implements NestInterceptor {
  intercept(
    _: ExecutionContext,
    next: CallHandler<User[]>,
  ): Observable<any> | Promise<Observable<any>> {
    return next
      .handle()
      .pipe(map((data) => data.map((user) => plainToInstance(User, user))));
  }
}
