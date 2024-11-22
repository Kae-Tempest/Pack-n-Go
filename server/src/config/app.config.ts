import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from '../entities/Users.entity';
import { Sizes } from '../entities/Sizes.entity';
import { Rooms } from '../entities/Rooms.entity';
import { Boxes } from '../entities/Boxes.entity';
import { Objects } from '../entities/Objects.entity';

function appConfig(): TypeOrmModuleOptions {
  return {
    type: 'postgres',
    host: 'db',
    port: parseInt(process.env.POSTGRES_HOST),
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DBNAME,
    entities: [User, Sizes, Rooms, Boxes, Objects],
    synchronize: true,
    dropSchema: false,
    logging: true,
  };
}

export default appConfig;
