import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CursosComponent } from './cursos/cursos.component';
import { CursoDetailsComponent } from './curso-details/curso-details.component';

const routes: Routes = [
  {path: 'courses', component: CursosComponent},
  {path: 'course/:id', component: CursoDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
