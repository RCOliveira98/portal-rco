import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { AlunoComponent } from './aluno/aluno.component';
import { AlunoDetailsComponent } from './aluno-details/aluno-details.component';

@NgModule({
  declarations: [AlunoComponent, AlunoDetailsComponent],
  imports: [
    CommonModule,
    StudentRoutingModule
  ]
})
export class StudentModule { }
