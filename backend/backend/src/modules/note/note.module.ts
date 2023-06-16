import { Module } from "@nestjs/common";
import { NoteController } from "./note.controller";
import { Note } from "./note.entity";
import { NoteService } from "./note.service";
import { DatabaseModule } from "database/database.module";

@Module({
  imports: [DatabaseModule],
  controllers: [NoteController],
  providers: [NoteService],
})
export class NoteModule {}
