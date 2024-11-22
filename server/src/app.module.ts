import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { SizesModule } from './sizes/sizes.module';
import { RoomsModule } from './rooms/rooms.module';
import { ObjectsModule } from './objects/objects.module';
import { BoxesModule } from './boxes/boxes.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import appConfig from './config/app.config';

@Module({
  imports: [
    TypeOrmModule.forRoot(appConfig()),
    UsersModule,
    SizesModule,
    RoomsModule,
    ObjectsModule,
    BoxesModule,
    AuthModule,
  ],
  providers: [],
})
export class AppModule { }
