import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Rooms } from './Rooms.entity';
import { Sizes } from './Sizes.entity';

@Entity()
export class Boxes {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Rooms, (room) => room.id)
  room: Rooms;

  @Column()
  number_box: number;

  @Column()
  is_fragile: boolean;

  @ManyToOne(() => Sizes, (size) => size.id)
  size: Sizes;

  @Column()
  comment: string;
}
