import { Classroom } from "./Classroom";
import { Reservation } from "./Reservation";

export enum UserRole {
  Teacher = "TEACHER",
  Student = "STUDENT",
}

export class User {
  private id: string;
  reservations?: Reservation[];

  constructor(
    public name: string,
    public role: UserRole,
  ) {
    this.id = "id";
    this.name = name;
    this.role = role;
  }
}
