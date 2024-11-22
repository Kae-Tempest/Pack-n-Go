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
import { ObjectsService } from './objects.service';
import { CreateObjectDto } from './dto/create-object.dto';
import { UpdateObjectDto } from './dto/update-object.dto';
import { ApiTags } from '@nestjs/swagger';
import { Objects } from 'src/entities/Objects.entity';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';

@ApiTags('Objects')
@Controller('objects')
@UseGuards(JwtAuthGuard)
export class ObjectsController {
  constructor(private readonly objectsService: ObjectsService) {}

  @Post('create')
  public async create(@Body() objectDto: CreateObjectDto): Promise<Objects> {
    return this.objectsService.create(objectDto);
  }

  @Delete(':id')
  public async delete(@Param('id') id: string): Promise<Objects> {
    return this.objectsService.delete(+id);
  }

  @Get(':id')
  public async findOne(@Param('id') id: string): Promise<Objects> {
    return this.objectsService.findOne(+id);
  }

  @Get('box/:id')
  public async findOneByBoxID(@Param('id') id: string): Promise<Objects> {
    return this.objectsService.findOneByBoxId(+id);
  }

  @Get('')
  public async findAll(): Promise<Objects[]> {
    return this.objectsService.findAll();
  }

  @Patch(':id')
  public async update(
    @Param('id') id: string,
    @Body() objectDto: UpdateObjectDto,
  ): Promise<Objects> {
    return this.objectsService.update(+id, objectDto);
  }
}
