import { Injectable } from '@angular/core';

import { User } from '../shared/user.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  public myStudents: Array<User>;
  constructor() { this.init(); }

  public getStudentsAll(): Array<User> {
    return this.myStudents;
  }

  public getStudentById(id: number): User {
    return this.myStudents[id] != null ? this.myStudents[id] : null;
  }

  private init(): void {

    this.myStudents = [
      {
        name: 'Roberto Pereira Costa',
        email: 'aluno1@email.com',
        password: '123a',
        address: {
          nation: 'Brasil',
          cep: '64800000',
          state: 'PI',
          district: 'Irapua I',
          publicPlace: 'Avenida Euripedes',
          houseNumber: '1726',
          complement: 'Casa das telhas'
        },
        kind: 2,
        person: {
          id: 1,
          cpf: '12352100059',
          dataNascimento: new Date(2000, 10, 20),
          phone: '899944122'
        }
      },
      {
        name: 'Maria Pereira Costa',
        email: 'aluno2@email.com',
        password: '123b',
        address: {
          nation: 'Brasil',
          cep: '64800000',
          state: 'PI',
          district: 'Irapua II',
          publicPlace: 'Avenida Euripedes2',
          houseNumber: '209',
          complement: 'Nonato'
        },
        kind: 2,
        person: {
          id: 2,
          cpf: '12332100499',
          dataNascimento: new Date(1998, 4, 22),
          phone: '899941152'
        }
      },
      {
        name: 'Juliano Pereira Costa',
        email: 'aluno3@email.com',
        password: '123c',
        address: {
          nation: 'Brasil',
          cep: '64800000',
          state: 'PI',
          district: 'Meladão',
          publicPlace: 'Rua Torres',
          houseNumber: 'SN',
          complement: 'Panificadora 2t'
        },
        kind: 2,
        person: {
          id: 3,
          cpf: '12332100091',
          dataNascimento: new Date(2001, 2, 10),
          phone: '899941122'
        }
      }
    ];
  }
}
