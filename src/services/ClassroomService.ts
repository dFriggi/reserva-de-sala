import { Classroom } from "../models/Classroom";
import { ClassroomRepository } from "../repositories/ClassroomRepository";

export class ClassroomService {
  private repository = ClassroomRepository.getInstance();

  listAvailable(start: Date, end: Date): Classroom[] {
    return this.repository.listAvailable(start, end);
  }
}
