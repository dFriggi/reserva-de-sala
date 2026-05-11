import { Classroom } from "../models/Classroom";
import { Reservation } from "../models/Reservation";

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

  findReservation(reservationId: string): { classroom: Classroom; reservation: Reservation } | undefined {
    for (const classroom of this.classrooms) {
      const reservation = classroom.getReservations().find((r) => r.getId() === reservationId);
      if (reservation) return { classroom, reservation };
    }
    return undefined;
  }

  listAvailable(start: Date, end: Date): Classroom[] {
    return this.classrooms.filter((classroom) =>
      classroom.getReservations().every((r) => !r.overlaps(start, end)),
    );
  }
}
