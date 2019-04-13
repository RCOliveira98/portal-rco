import { Component, OnInit } from '@angular/core';

import { CoursesService } from './../courses.service';
import { CursoModel } from '../curso.model';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  myCurso: Array<CursoModel>;
  constructor(private serviceClass: CoursesService) { }

  ngOnInit() {
    this.myCurso = this.serviceClass.getCursos();
  }

}
