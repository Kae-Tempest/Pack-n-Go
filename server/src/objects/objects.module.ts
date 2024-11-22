import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Boxes } from 'src/entities/Boxes.entity';
import { ObjectsController } from './objects.controller';
import { ObjectsService } from './objects.service';
import { Objects } from 'src/entities/Objects.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Objects, Boxes])],
  controllers: [ObjectsController],
  providers: [ObjectsService],
})
export class ObjectsModule {}
