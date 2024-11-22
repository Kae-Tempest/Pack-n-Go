import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Boxes } from 'src/entities/Boxes.entity';
import { Objects } from 'src/entities/Objects.entity';
import { Repository } from 'typeorm';
import { CreateObjectDto } from './dto/create-object.dto';
import { UpdateObjectDto } from './dto/update-object.dto';

@Injectable()
export class ObjectsService {
  constructor(
    @InjectRepository(Objects)
    private objectRepository: Repository<Objects>,
    @InjectRepository(Boxes)
    private boxesRepository: Repository<Boxes>,
  ) {}

  public async findAll(): Promise<Objects[]> {
    return this.objectRepository.find();
  }

  public async findOne(id: number): Promise<Objects> {
    return this.objectRepository.findOneBy({ id: id });
  }

  public async findOneByBoxId(id: number): Promise<Objects> {
    return this.objectRepository.findOneBy({ box: { id: id } });
  }

  public async create(object: CreateObjectDto): Promise<Objects> {
    const { box, ...objectData } = object;
    const boxEntity = await this.boxesRepository.findOneBy({ id: box.id });
    const objectEntity = this.objectRepository.create({
      ...objectData,
      box: boxEntity,
    });
    return this.objectRepository.save(objectEntity);
  }

  public async update(id: number, data: UpdateObjectDto): Promise<Objects> {
    const obj: Objects = await this.objectRepository.findOne({
      where: { id },
      relations: ['boxes'],
    });

    if (!obj) {
      throw new NotFoundException();
    }

    obj.box = await this.boxesRepository.findOneBy({ id: obj.box.id });
    obj.name = data.name;
    obj.comment = data.comment;
    obj.quantity = data.quantity;
    return this.objectRepository.save(obj);
  }

  public async delete(id: number): Promise<Objects> {
    const obj: Objects = await this.objectRepository.findOneBy({ id: id });
    return this.objectRepository.remove(obj);
  }
}
