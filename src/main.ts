import {
  StudyClassroomFactory,
  GroupStudyClassroomFactory,
  LaboratoryClassroomFactory,
  ExamClassroomFactory,
} from "./factories/ClassroomFactories";
import { ClassroomRepository } from "./repositories/ClassroomRepository";
import { ClassroomService } from "./services/ClassroomService";
import { User, UserRole } from "./models/User";
import { Reservation } from "./models/Reservation";

const repo = ClassroomRepository.getInstance();
const service = new ClassroomService();

const sala101 = StudyClassroomFactory.create(101);
const sala201 = GroupStudyClassroomFactory.create(201);
const sala301 = LaboratoryClassroomFactory.create(301);
const sala401 = ExamClassroomFactory.create(401);

const professor = new User("Prof. Silva", UserRole.Teacher);
const aluno1 = new User("João", UserRole.Student);
const aluno2 = new User("Maria", UserRole.Student);
const hoje = new Date();
sala101.addReservation(
  new Reservation(
    new Date(hoje.getFullYear(), hoje.getMonth(), hoje.getDate(), 10, 0),
    new Date(hoje.getFullYear(), hoje.getMonth(), hoje.getDate(), 12, 0),
    professor,
    sala101.getId(),
  ),
);
sala101.attach(aluno1);
sala101.attach(aluno2);

const reservation1 = new Reservation(
  new Date(hoje.getFullYear(), hoje.getMonth(), hoje.getDate(), 14, 0),
  new Date(hoje.getFullYear(), hoje.getMonth(), hoje.getDate(), 15, 0),
  aluno1,
  sala101.getId(),
);

if (service.createReservation(reservation1)) {
  console.log(`Reserva criada com sucesso para ${reservation1.classroomId}`);
} else console.log("Reserva não foi criada");

repo.add(sala101);
repo.add(sala201);
repo.add(sala301);
repo.add(sala401);

const start1 = new Date(
  hoje.getFullYear(),
  hoje.getMonth(),
  hoje.getDate(),
  8,
  0,
);
const end1 = new Date(
  hoje.getFullYear(),
  hoje.getMonth(),
  hoje.getDate(),
  9,
  0,
);
console.log(
  "Disponíveis 08h–09h:",
  service.listAvailable(start1, end1).map((r) => r.getNumber()),
);

const start2 = new Date(
  hoje.getFullYear(),
  hoje.getMonth(),
  hoje.getDate(),
  10,
  0,
);
const end2 = new Date(
  hoje.getFullYear(),
  hoje.getMonth(),
  hoje.getDate(),
  11,
  0,
);
console.log(
  "Disponíveis 10h–11h:",
  service.listAvailable(start2, end2).map((r) => r.getNumber()),
);
