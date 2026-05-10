import { randomUUID } from "crypto";
import { Reservation } from "./Reservation";
import { Notification } from "./Notification";
import { Classroom } from "./Classroom";

export enum UserRole {
  Teacher = "TEACHER",
  Student = "STUDENT",
}

export class User {
  private id: string;
  reservations?: Reservation[];
  notifications?: Notification[];

  constructor(
    public name: string,
    public role: UserRole,
  ) {
    this.id = randomUUID();
    this.name = name;
    this.role = role;
  }

  notify(classroom: Classroom, message: string) {
    const notification = new Notification(message);
    console.log(`Notificação para ${this.name}: ${notification.message}`);
    this.notifications?.push(notification);
  }
}
