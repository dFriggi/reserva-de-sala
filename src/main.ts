import {
  StudyClassroomFactory,
  GroupStudyClassroomFactory,
  LaboratoryClassroomFactory,
  ExamClassroomFactory,
} from "./factories/ClassroomFactories";
import { ClassroomRepository } from "./repositories/ClassroomRepository";
import { User, UserRole } from "./models/User";
import { ReservationCLI } from "./view/ReservationCLI";

const repo = ClassroomRepository.getInstance();

const rooms = [
  StudyClassroomFactory.create(101),
  StudyClassroomFactory.create(102),
  GroupStudyClassroomFactory.create(201),
  LaboratoryClassroomFactory.create(301),
  ExamClassroomFactory.create(401),
];
rooms.forEach((r) => repo.add(r));

const users = [
  new User("Prof. Silva", UserRole.Teacher),
  new User("João", UserRole.Student),
  new User("Maria", UserRole.Student),
];
rooms.forEach((room) => users.forEach((u) => room.attach(u)));

new ReservationCLI(rooms, users).run();
