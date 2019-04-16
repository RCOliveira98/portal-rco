import { Component, OnInit } from '@angular/core';

import { StudentService } from '../student.service';

import { StudentModel } from './../student.model';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit {

  public alunos: Array<StudentModel>;

  constructor(private servAlunos: StudentService ) { }

  ngOnInit() {
    this.alunos = this.servAlunos.getStudentsAll();
  }

  public getStudent(id: number): StudentModel {
    return this.servAlunos.getStudentById(id);
  }

}
