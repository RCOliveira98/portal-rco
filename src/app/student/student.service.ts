import { Injectable } from '@angular/core';

import { StudentModel } from './student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  public myStudents: Array<StudentModel>;
  constructor() { this.init(); }

  public getStudentsAll(): Array<StudentModel> {
    return this.myStudents;
  }

  public getStudentById(id: number): StudentModel {
    return this.myStudents[id] != null ? this.myStudents[id] : null;
  }

  private init(): void {
    this.myStudents = [
      {
        id: 1,
        name: 'Roberto Pereira Costa',
        cpf: '12345678901',
        email: 'aluno1@email.com'
      },
      {
        id: 2,
        name: 'Maria Karla Gomes',
        cpf: '12345678902',
        email: 'aluno2@email.com'
      },
      {
        id: 3,
        name: 'Diego Luz Costa',
        cpf: '12345678903',
        email: 'aluno3@email.com'
      },
      {
        id: 4,
        name: 'Francisca Rocha Neres',
        cpf: '12345678904',
        email: 'aluno4@email.com'
      },
      {
        id: 5,
        name: 'Pedro Null Static',
        cpf: '12345678905',
        email: 'aluno5@email.com'
      },
      {
        id: 6,
        name: 'Geovana Pereira Luz',
        cpf: '12345678906',
        email: 'aluno6@email.com'
      },
    ]
  }
}
