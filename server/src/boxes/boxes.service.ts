import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBoxDto } from './dto/create-box.dto';
import { UpdateBoxDto } from './dto/update-box.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Boxes } from 'src/entities/Boxes.entity';
import { Rooms } from 'src/entities/Rooms.entity';
import { Sizes } from 'src/entities/Sizes.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BoxesService {
  constructor(
    @InjectRepository(Boxes)
    private boxesRepository: Repository<Boxes>,
    @InjectRepository(Rooms)
    private roomsRepository: Repository<Rooms>,
    @InjectRepository(Sizes)
    private sizesRepository: Repository<Sizes>,
  ) {}

  public async findAll(): Promise<Boxes[]> {
    return this.boxesRepository.find();
  }

  public async findOne(id: number): Promise<Boxes> {
    return this.boxesRepository.findOneBy({ id: id });
  }

  public async findOneByRoomId(id: number): Promise<Boxes> {
    return this.boxesRepository.findOneBy({ room: { id: id } });
  }

  public async findOneBySizeId(id: number): Promise<Boxes> {
    return this.boxesRepository.findOneBy({ size: { id: id } });
  }

  public async findOneByNumber(id: number): Promise<Boxes> {
    return this.boxesRepository.findOneBy({ number_box: id });
  }

  public async findOneByFragile(isFragile: boolean): Promise<Boxes> {
    return this.boxesRepository.findOneBy({ is_fragile: isFragile });
  }

  public async create(box: CreateBoxDto): Promise<Boxes> {
    const { room, size, ...boxData } = box;
    const roomEntity: Rooms = await this.roomsRepository.findOneBy({
      id: room.id,
    });
    const sizeEntity: Sizes = await this.sizesRepository.findOneBy({
      id: size.id,
    });

    const boxEntity = this.boxesRepository.create({
      ...boxData,
      room: roomEntity,
      size: sizeEntity,
    });
    return this.boxesRepository.save(boxEntity);
  }

  public async update(id: number, data: UpdateBoxDto): Promise<Boxes> {
    const box: Boxes = await this.boxesRepository.findOne({
      where: { id },
      relations: ['rooms, sizes'],
    });
    if (!box) {
      throw new NotFoundException();
    }
    box.room = await this.roomsRepository.findOneBy({ id: box.room.id });
    box.size = await this.sizesRepository.findOneBy({ id: box.size.id });
    box.number_box = data.number_box;
    box.is_fragile = data.is_fragile;
    box.comment = data.comment;
    return this.boxesRepository.save(box);
  }

  public async delete(id: number): Promise<Boxes> {
    const box: Boxes = await this.boxesRepository.findOneBy({ id: id });
    return this.boxesRepository.remove(box);
  }
}
