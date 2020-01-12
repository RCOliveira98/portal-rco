import { IFormCanDeactivate } from './../../guards/i-form-can-deactivate';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

import { StudentService } from '../student.service';
import { User } from 'src/app/shared/user.model';

@Component({
  selector: 'app-aluno-details',
  templateUrl: './aluno-details.component.html',
  styleUrls: ['./aluno-details.component.css']
})
export class AlunoDetailsComponent implements OnInit, OnDestroy, IFormCanDeactivate {

  public currentElement: User;
  private inscricao: Subscription;

  constructor(private servStudent: StudentService,
              private elementRoute: ActivatedRoute) { }

  ngOnInit() {
    this.init();
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

  changeComponent(): boolean {
    return this.changeRoute();
  }

  private init(): void {
    const date = 'id';
    let currentId: number;
    this.inscricao = this.elementRoute.params.subscribe(
      (myParams: any) => {
        currentId = myParams[date];
        this.currentElement = this.servStudent.getStudentById(currentId - 1);
      }
    );
  }

  private changeRoute(): boolean {
    return confirm('Tem certeza que deseja sair dessa página?');
  }

}
