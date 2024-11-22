import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Sizes } from 'src/entities/Sizes.entity';
import { SizesService } from './sizes.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';

@ApiTags('Sizes')
@Controller('sizes')
@UseGuards(JwtAuthGuard)
export class SizesController {
  constructor(private readonly sizesService: SizesService) {}

  @Get(':name')
  public async findOneByName(@Param('name') name: string): Promise<Sizes> {
    return this.sizesService.findOneByName(name);
  }

  @Get('')
  public async findAll(): Promise<Sizes[]> {
    return this.sizesService.findAll();
  }

  @Get(':id')
  public async findOne(@Param('id') id: string): Promise<Sizes> {
    return this.sizesService.findOneById(+id);
  }
}
