import { randomUUID } from "crypto";
import { Classroom } from "../models/Classroom";
import { ClassroomRepository } from "../repositories/ClassroomRepository";
import {
  FirstReservationPolitics,
  ReservationPolitics,
} from "../models/ReservationPolitics";
import { Reservation } from "../models/Reservation";

export class ClassroomService {
  private repository = ClassroomRepository.getInstance();
  private currentPolitics = new FirstReservationPolitics(randomUUID);

  setPolitics(politics: ReservationPolitics): void {
    this.currentPolitics = politics;
  }

  createReservation(reservation: Reservation): boolean {
    const classroom = this.repository.findById(reservation.classroomId);
    if (!classroom) return false;

    const isAllowed = this.currentPolitics.validate(
      reservation,
      classroom.getReservations(),
    );

    if (isAllowed) {
      classroom.addReservation(reservation);
      classroom.notifyAll(
        `Nova reserva confirmada na sala ${classroom.getNumber()}`,
      );
      return true;
    }

    console.log(`Reserva negada pela política: ${this.currentPolitics.id}`);
    return false;
  }

  listAvailable(start: Date, end: Date): Classroom[] {
    return this.repository.listAvailable(start, end);
  }
}
