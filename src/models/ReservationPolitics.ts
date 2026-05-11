import { UserRole } from "./User";
import { Reservation } from "./Reservation";

export interface ReservationPolitics {
  id: string;
  validate(newReservation: Reservation, existingReservations: Reservation[]): boolean;
}

export class FirstReservationPolitics implements ReservationPolitics {
  constructor(public id: string) {}

  validate(newReservation: Reservation, existingReservations: Reservation[]): boolean {
    return !existingReservations.some((r) =>
      r.overlaps(newReservation.startDate, newReservation.endDate),
    );
  }
}

export class TeacherReservationPolitics implements ReservationPolitics {
  constructor(public id: string) {}

  validate(newReservation: Reservation, existingReservations: Reservation[]): boolean {
    const conflicts = existingReservations.filter((r) =>
      r.overlaps(newReservation.startDate, newReservation.endDate),
    );

    if (conflicts.length === 0) return true;

    if (newReservation.holder.role === UserRole.Teacher) {
      return !conflicts.some((r) => r.holder.role === UserRole.Teacher);
    }

    return false;
  }
}
