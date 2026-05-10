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

repo.add(sala101);
repo.add(sala201);
repo.add(sala301);
repo.add(sala401);

const professor = new User("Prof. Silva", UserRole.Teacher);
const aluno = new User("João", UserRole.Student);

sala101.attach(professor);
sala101.attach(aluno);

const hoje = new Date();
const h = (hour: number, min = 0) =>
  new Date(hoje.getFullYear(), hoje.getMonth(), hoje.getDate(), hour, min);

const res1 = new Reservation(h(10), h(12), professor, sala101.getId());
console.log(service.createReservation(res1) ? "✓ Criada" : "✗ Negada");

console.log(service.updateReservation(res1.getId(), h(14), h(16)) ? "✓ Atualizada" : "✗ Negada");

const res2 = new Reservation(h(16), h(18), aluno, sala101.getId());
service.createReservation(res2);
console.log(service.updateReservation(res1.getId(), h(15), h(17)) ? "✓ Atualizada" : "✗ Negada");

console.log(service.cancelReservation(res2.getId()) ? "✓ Cancelada" : "✗ Não encontrada");
