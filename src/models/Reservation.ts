import { User } from "./User";
import { Classroom } from "./Classroom";

export interface Reservation {
  id: string;
  startDate: Date;
  endDate: Date;
  classroom: Classroom;
}
