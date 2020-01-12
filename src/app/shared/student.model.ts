export class StudentModel {
  id: number;
  cpf: string;
  dataNascimento: Date;
  phone: string;
  sexo: string;

  constructor(s?: StudentModel) {
    if (s) {
      this.id = s.id;
      this.cpf = s.cpf;
      this.dataNascimento = s.dataNascimento;
      this.phone = s.phone;
      this.sexo = s.sexo;
    }
  }
}
