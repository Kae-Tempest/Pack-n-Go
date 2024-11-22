import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Rooms } from 'src/entities/Rooms.entity';
import { Repository } from 'typeorm';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';

@Injectable()
export class RoomsService {
  constructor(
    @InjectRepository(Rooms)
    private RoomsRepository: Repository<Rooms>,
  ) {}

  public async findAll(): Promise<Rooms[]> {
    return this.RoomsRepository.find();
  }

  public async findOne(id: number): Promise<Rooms> {
    return this.RoomsRepository.findOneBy({ id: id });
  }

  public async findOneByName(name: string): Promise<Rooms> {
    return this.RoomsRepository.findOneBy({ name: name });
  }

  public async findOneByColor(color: string): Promise<Rooms> {
    return this.RoomsRepository.findOneBy({ color: color });
  }

  public async create(room: CreateRoomDto): Promise<Rooms> {
    return this.RoomsRepository.save(room);
  }

  public async update(id: number, data: UpdateRoomDto): Promise<Rooms> {
    const room: Rooms = await this.RoomsRepository.findOne({
      where: { id },
    });

    if (!room) {
      throw new NotFoundException();
    }

    room.name = data.name;
    room.color = data.color;
    return this.RoomsRepository.save(room);
  }

  public async delete(id: number): Promise<Rooms> {
    const room: Rooms = await this.RoomsRepository.findOneBy({ id: id });
    return this.RoomsRepository.remove(room);
  }
}
