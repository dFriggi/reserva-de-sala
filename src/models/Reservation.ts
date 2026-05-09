import { randomUUID } from "crypto";
import { User } from "./User";

export class Reservation {
  private id: string;

  constructor(
    public startDate: Date,
    public endDate: Date,
    public holder: User,
    public classroomId: string,
  ) {
    this.id = randomUUID();
  }

  getId(): string {
    return this.id;
  }

  overlaps(start: Date, end: Date): boolean {
    return this.startDate < end && this.endDate > start;
  }
}
