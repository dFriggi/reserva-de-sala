import {
  FirstReservationPolitics,
  ReservationPolitics,
} from "./ReservationPolitics";

export abstract class Classroom {
  private id: string;

  constructor(private number: number) {
    this.id = "id";
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
