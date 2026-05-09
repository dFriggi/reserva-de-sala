import { randomUUID } from "crypto";
import { User } from "./User";
import { Notification } from "./Notification";

export abstract class Classroom {
  private id: string;
  private interested: User[] = [];

  constructor(public number: number) {
    this.id = randomUUID();
    this.number = number;
  }

  attach(user: User): void {
    if (!this.interested.includes(user)) this.interested.push(user);
  }

  remove(user: User): void {
    this.interested = this.interested.filter((u) => u !== user);
  }

  notify(message: string) {
    const notification = new Notification(message);

    this.interested.forEach((user) => user.update(notification));
  }
}

export class StudyClassroom extends Classroom {
  constructor(number: number) {
    super(number);
  }
}

export class ExamClassroom extends Classroom {
  constructor(number: number) {
    super(number);
  }
}

export class GroupStudyClassroom extends Classroom {
  constructor(number: number) {
    super(number);
  }
}

export class LaboratoryClassroom extends Classroom {
  constructor(number: number) {
    super(number);
  }
}
