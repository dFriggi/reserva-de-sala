import { Classroom } from "./Classroom/Classroom";
import { Reservation } from "./Reservation";

export enum UserRole {
  Teacher = "TEACHER",
  Student = "STUDENT",
}

export interface User {
  id: string;
  name: string;
  role: UserRole;
  reservations?: Reservation[];
}
