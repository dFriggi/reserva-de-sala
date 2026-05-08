import { User, UserRole } from "./User";

export interface ReservationPolitics {
  id: string;
  rule(): void;
}

export class FirstReservationPolitics implements ReservationPolitics {
  constructor(public id: string) {}
  rule() {}
}

export class TeacherReservationPolitics implements ReservationPolitics {
  constructor(public id: string) {}
  rule() {}
}
