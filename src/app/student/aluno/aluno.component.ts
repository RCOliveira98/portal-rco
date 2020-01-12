import { Component, OnInit } from '@angular/core';

import { StudentService } from '../student.service';
import { User } from 'src/app/shared/user.model';


@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit {

  public alunos: Array<User>;

  constructor(private servAlunos: StudentService ) { }

  ngOnInit() {
    this.alunos = this.servAlunos.getStudentsAll();
  }

  public getStudent(id: number): User {
    return this.servAlunos.getStudentById(id - 1);
  }

}
