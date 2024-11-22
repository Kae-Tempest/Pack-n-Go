import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { BoxesService } from './boxes.service';
import { CreateBoxDto } from './dto/create-box.dto';
import { UpdateBoxDto } from './dto/update-box.dto';
import { ApiTags } from '@nestjs/swagger';
import { Boxes } from 'src/entities/Boxes.entity';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';

@ApiTags('Boxes')
@Controller('boxes')
@UseGuards(JwtAuthGuard)
export class BoxesController {
  constructor(private readonly boxesService: BoxesService) {}

  @Get('boxes')
  public async findAll(): Promise<Boxes[]> {
    return this.boxesService.findAll();
  }

  @Get(':id')
  public async findOne(@Param('id') id: string): Promise<Boxes> {
    return this.boxesService.findOne(+id);
  }

  @Get(':number')
  public async findOneByNumber(
    @Param('number') number: string,
  ): Promise<Boxes> {
    return this.boxesService.findOneByNumber(+number);
  }

  @Get(':size')
  public async findOneBySize(@Param('size') size: string): Promise<Boxes> {
    return this.boxesService.findOneBySizeId(+size);
  }

  @Get(':fragile')
  public async findOneByFragile(
    @Param('fragile') fragile: boolean, // TODO : Voir comment bien gerer le cas !
  ): Promise<Boxes> {
    return this.boxesService.findOneByFragile(fragile);
  }

  @Get(':room')
  public async findOneByRoom(@Param('room') room: string): Promise<Boxes> {
    return this.boxesService.findOneByRoomId(+room);
  }

  @Post('create')
  public async create(@Body() boxDto: CreateBoxDto): Promise<Boxes> {
    return this.boxesService.create(boxDto);
  }

  @Delete(':id')
  public async delete(@Param('id') id: string): Promise<Boxes> {
    return this.boxesService.delete(+id);
  }

  @Patch(':id')
  public async update(
    @Param('id') id: string,
    @Body() boxDto: UpdateBoxDto,
  ): Promise<Boxes> {
    return this.boxesService.update(+id, boxDto);
  }
}
