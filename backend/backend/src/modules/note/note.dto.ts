import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { Prisma } from "@prisma/client";

export class CreateNoteDto {
  @ApiProperty()
  data: Prisma.TaskCreateInput;

  //   @ApiProperty()
  //   content: string;

  //   @ApiProperty()
  //   userId: number;
}

export class UpdateNoteDto {
  @ApiProperty()
  id: number;

  @ApiPropertyOptional()
  title?: string;

  @ApiPropertyOptional()
  content?: string;

  @ApiPropertyOptional()
  userId?: number;
}
