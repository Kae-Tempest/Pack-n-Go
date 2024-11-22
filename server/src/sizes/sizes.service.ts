import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Sizes } from 'src/entities/Sizes.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SizesService {
  constructor(
    @InjectRepository(Sizes)
    private sizeRepository: Repository<Sizes>,
  ) {}

  public async findAll(): Promise<Sizes[]> {
    return this.sizeRepository.find();
  }

  public async findOneById(id: number): Promise<Sizes> {
    return this.sizeRepository.findOneBy({ id: id });
  }

  public async findOneByName(name: string): Promise<Sizes> {
    return this.sizeRepository.findOneBy({ name: name });
  }
}
