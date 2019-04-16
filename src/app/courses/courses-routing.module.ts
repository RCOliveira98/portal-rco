import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CursosComponent } from './cursos/cursos.component';
import { CursoDetailsComponent } from './curso-details/curso-details.component';

// utilização de rotas filhas. Add o array children.
const routes: Routes = [
  {path: 'courses', component: CursosComponent, children: [
    {path: 'course/:id', component: CursoDetailsComponent},
    {path: 'course/:id/edit', component: CursoDetailsComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
