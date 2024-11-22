import { CreateBoxDto } from 'src/boxes/dto/create-box.dto';

export class CreateObjectDto {
  id: number;
  box: CreateBoxDto;
  name: string;
  quantity: number;
  comment: string;
}
