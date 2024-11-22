import { Module } from '@nestjs/common';
import { BoxesService } from './boxes.service';
import { BoxesController } from './boxes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Boxes } from 'src/entities/Boxes.entity';
import { Rooms } from 'src/entities/Rooms.entity';
import { Sizes } from 'src/entities/Sizes.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Boxes, Rooms, Sizes])],
  controllers: [BoxesController],
  providers: [BoxesService],
})
export class BoxesModule {}
