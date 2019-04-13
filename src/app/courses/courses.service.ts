import { Injectable } from '@angular/core';

import { CursoModel } from './curso.model';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  serviceCursos: Array<CursoModel>;

  constructor() { this.init(); }

  public init(): void {
    this.serviceCursos = [
      {
        id: 1,
        title: 'Linguagem C',
        qtdAulas: 120,
        price: 19.90
      },
      {
        id: 2,
        title: 'Java POO',
        qtdAulas: 100,
        price: 29.90
      },
      {
        id: 3,
        title: 'HTML e CSS',
        qtdAulas: 95,
        price: 19.90
      },
      {
        id: 4,
        title: 'JavaScript',
        qtdAulas: 102,
        price: 21.90
      },
      {
        id: 5,
        title: 'Ruby',
        qtdAulas: 90,
        price: 19.90
      },
      {
        id: 6,
        title: 'TypeScript',
        qtdAulas: 92,
        price: 19.90
      },
      {
        id: 7,
        title: 'Angular',
        qtdAulas: 158,
        price: 35.50
      },
      {
        id: 8,
        title: 'Ruby On Rails',
        qtdAulas: 254,
        price: 29.90
      },
      {
        id: 9,
        title: 'NodeJs',
        qtdAulas: 147,
        price: 23.90
      },
    ];
  }

  public getCursos(): Array<CursoModel> {
    return this.serviceCursos;
  }

  public getCursosById(id: number): CursoModel {
    if (this.serviceCursos[id] != null) {
       return this.serviceCursos[id];
    }
    return null; // id não encontrado
  }
}
