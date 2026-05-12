import { ClassroomRepository } from "../repositories/ClassroomRepository";

export class ReportService {
  private repository = ClassroomRepository.getInstance();

  dailyReport(date: Date): void {
    const start = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0);
    const end = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 23, 59);

    console.log(`Relatório ${date.toLocaleDateString("pt-BR")}`);

    this.repository.getAll().forEach((classroom) => {
      const reservations = classroom
        .getReservations()
        .filter((r) => r.startDate >= start && r.startDate <= end)
        .sort((a, b) => a.startDate.getTime() - b.startDate.getTime());

      if (reservations.length === 0) return;

      console.log(`\n  Sala ${classroom.getNumber()} — ${classroom.getType()}`);
      reservations.forEach((r) => {
        const fmt = (d: Date) => d.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });
        console.log(`    ${fmt(r.startDate)}–${fmt(r.endDate)}  ${r.holder.name}`);
      });
    });
  }
}
