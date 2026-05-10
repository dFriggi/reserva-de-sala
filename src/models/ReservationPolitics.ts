import { User, UserRole } from "./User";
import { Reservation } from "./Reservation";

export interface ReservationPolitics {
  id: string;
  validate(
    newReservation: Reservation,
    existingReservations: Reservation[],
  ): boolean;
}

export class FirstReservationPolitics implements ReservationPolitics {
  constructor(public id: string) {}

  //first reservation rule

  validate(newReservation: Reservation, existingReservations: Reservation[]) {
    return !existingReservations.some((r) =>
      r.overlaps(newReservation.startDate, newReservation.endDate),
    );
  }
}

export class TeacherReservationPolitics implements ReservationPolitics {
  constructor(public id: string) {}

  //teacher reservation rule

  validate(newReservation: Reservation, existingReservations: Reservation[]) {
    //teacher reservation rule here
    return !existingReservations.some((r) =>
      r.overlaps(newReservation.startDate, newReservation.endDate),
    );
  }
}
