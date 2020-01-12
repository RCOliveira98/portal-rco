import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlunosGuard } from '../guards/alunos.guard';
import { DeactivateTest } from './../guards/dea-activated.guard';


import { AlunoDetailsComponent } from './aluno-details/aluno-details.component';
import { AlunoComponent } from './aluno/aluno.component';


const routes: Routes = [
  {path: '', component: AlunoComponent, canActivateChild: [AlunosGuard], children: [
    {path: 'student/new', component: AlunoDetailsComponent},
    {path: 'student/:id', component: AlunoDetailsComponent, canDeactivate: [DeactivateTest]}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [DeactivateTest, AlunosGuard]
})
export class StudentRoutingModule { }
