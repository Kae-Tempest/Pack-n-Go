import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Boxes } from './Boxes.entity';

@Entity()
export class Objects {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Boxes, (box) => box.id)
  box: Boxes;

  @Column()
  name: string;

  @Column()
  quantity: number;

  @Column()
  comment: string;
}
