import { ReservationPolitics } from "../ReservationPolitics";

export interface Classroom {
  id: string;
  number: string;
  politic: ReservationPolitics;
}

export class StudyClassroom implements Classroom {
  constructor(
    public id: string,
    public number: string,
    public politic: ReservationPolitics,
  ) {}
}

export class TestClassroom implements Classroom {
  constructor(
    public id: string,
    public number: string,
    public politic: ReservationPolitics,
  ) {}
}

export class GroupStudyClassroom implements Classroom {
  constructor(
    public id: string,
    public number: string,
    public politic: ReservationPolitics,
  ) {}
}

export class LaboratoryClassroom implements Classroom {
  constructor(
    public id: string,
    public number: string,
    public politic: ReservationPolitics,
  ) {}
}
