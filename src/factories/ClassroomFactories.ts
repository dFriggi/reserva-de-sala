import {
  StudyClassroom,
  GroupStudyClassroom,
  ExamClassroom,
  LaboratoryClassroom,
} from "../models/Classroom";

export class StudyClassroomFactory {
  static create(number: number): StudyClassroom {
    return new StudyClassroom(number);
  }
}

export class GroupStudyClassroomFactory {
  static create(number: number): GroupStudyClassroom {
    return new GroupStudyClassroom(number);
  }
}

export class ExamClassroomFactory {
  static create(number: number): ExamClassroom {
    return new ExamClassroom(number);
  }
}

export class LaboratoryClassroomFactory {
  static create(number: number): LaboratoryClassroom {
    return new LaboratoryClassroom(number);
  }
}
