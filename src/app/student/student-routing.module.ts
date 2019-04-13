import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlunoDetailsComponent } from './aluno-details/aluno-details.component';
import { AlunoComponent } from './aluno/aluno.component';

const routes: Routes = [
  {path: 'students', component: AlunoComponent},
  {path: 'student/:id', component: AlunoDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
