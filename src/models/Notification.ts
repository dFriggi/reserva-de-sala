import { randomUUID } from "crypto";

export class Notification {
  id: string;

  constructor(public message?: string) {
    this.id = randomUUID();
    this.message = message;
  }
}
