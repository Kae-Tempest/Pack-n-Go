import { Module } from '@nestjs/common';
import { SizesService } from './sizes.service';
import { SizesController } from './sizes.controller';
import { Sizes } from 'src/entities/Sizes.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Sizes])],
  controllers: [SizesController],
  providers: [SizesService],
})
export class SizesModule {}
