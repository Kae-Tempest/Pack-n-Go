import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Rooms } from 'src/entities/Rooms.entity';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { RoomsService } from './rooms.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';

@ApiTags('Rooms')
@Controller('rooms')
@UseGuards(JwtAuthGuard)
export class RoomsController {
  constructor(private readonly roomsService: RoomsService) {}

  @Get('')
  public async findAll(): Promise<Rooms[]> {
    return this.roomsService.findAll();
  }

  @Get(':id')
  public async findOne(@Param('id') id: string): Promise<Rooms> {
    return this.roomsService.findOne(+id);
  }

  @Get(':name')
  public async findOneByName(@Param('name') name: string): Promise<Rooms> {
    return this.roomsService.findOneByName(name);
  }

  @Get(':color')
  public async findOneByColor(@Param('color') color: string): Promise<Rooms> {
    return this.roomsService.findOneByColor(color);
  }

  @Post('create')
  public async create(@Body() roomDto: CreateRoomDto): Promise<Rooms> {
    return this.roomsService.create(roomDto);
  }

  @Delete(':id')
  public async delete(@Param('id') id: string): Promise<Rooms> {
    return this.roomsService.delete(+id);
  }

  @Patch(':id')
  public async update(
    @Param('id') id: string,
    @Body() roomDto: UpdateRoomDto,
  ): Promise<Rooms> {
    return this.roomsService.update(+id, roomDto);
  }
}
