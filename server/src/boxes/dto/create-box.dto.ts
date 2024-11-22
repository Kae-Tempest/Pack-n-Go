import { CreateRoomDto } from 'src/rooms/dto/create-room.dto';
import { CreateSizeDto } from 'src/sizes/dto/create-size.dto';

export class CreateBoxDto {
  id: number;
  room: CreateRoomDto;
  number_box: number;
  is_fragile: boolean;
  size: CreateSizeDto;
  comment: string;
}
