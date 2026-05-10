import { StudyClassroomFactory } from "./factories/ClassroomFactories";
import { ClassroomRepository } from "./repositories/ClassroomRepository";
import { ClassroomService } from "./services/ClassroomService";
import { TeacherReservationPolitics } from "./models/ReservationPolitics";
import { User, UserRole } from "./models/User";
import { Reservation } from "./models/Reservation";
import { randomUUID } from "crypto";

const repo = ClassroomRepository.getInstance();
const service = new ClassroomService();

const sala101 = StudyClassroomFactory.create(101);
repo.add(sala101);

const professor = new User("Prof. Silva", UserRole.Teacher);
const aluno = new User("João", UserRole.Student);
sala101.attach(professor);
sala101.attach(aluno);

const hoje = new Date();
const h = (hour: number) =>
  new Date(hoje.getFullYear(), hoje.getMonth(), hoje.getDate(), hour, 0);

const r1 = new Reservation(h(10), h(12), aluno, sala101.getId());
console.log(service.createReservation(r1) ? "✓" : "✗");

const r2 = new Reservation(h(10), h(12), professor, sala101.getId());
console.log(service.createReservation(r2) ? "✓" : "✗");

service.cancelReservation(r1.getId());

service.setPolitics(new TeacherReservationPolitics(randomUUID()));

const r3 = new Reservation(h(14), h(16), aluno, sala101.getId());
console.log(service.createReservation(r3) ? "✓" : "✗");

const r4 = new Reservation(h(14), h(16), professor, sala101.getId());
console.log(service.createReservation(r4) ? "✓" : "✗");

const r5 = new Reservation(h(14), h(16), aluno, sala101.getId());
console.log(service.createReservation(r5) ? "✓" : "✗");
