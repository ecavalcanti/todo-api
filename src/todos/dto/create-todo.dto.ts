import { IsBoolean, IsInt, IsString } from 'class-validator';

export class CreateTodoDto {
  @IsString()
  title: string;

  @IsBoolean()
  done: boolean;

  @IsInt()
  userId: number;
}
