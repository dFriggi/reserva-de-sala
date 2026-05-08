import { randomUUID } from "crypto";

export abstract class Classroom {
  private id: string;

  constructor(private number: number) {
    this.id = randomUUID();
    this.number = number;
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
