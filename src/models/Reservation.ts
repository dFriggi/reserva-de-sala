import { User } from "./User";

export interface Reservation {
  id: string;
  startDate: Date;
  endDate: Date;
  holder: User;
}
