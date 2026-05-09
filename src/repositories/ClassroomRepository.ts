import { Classroom } from "../models/Classroom";

export class ClassroomRepository {
  private static instance: ClassroomRepository;

  private readonly classrooms: Classroom[] = [];

  static getInstance(): ClassroomRepository {
    if (!ClassroomRepository.instance) {
      ClassroomRepository.instance = new ClassroomRepository();
    }
    return ClassroomRepository.instance;
  }

  add(classroom: Classroom): void {
    this.classrooms.push(classroom);
  }

  getAll(): Classroom[] {
    return this.classrooms;
  }

  findById(id: string): Classroom | undefined {
    return this.classrooms.find((c) => c.getId() === id);
  }

  listAvailable(start: Date, end: Date): Classroom[] {
    return this.classrooms.filter((classroom) =>
      classroom.getReservations().every((r) => !r.overlaps(start, end)),
    );
  }
}
