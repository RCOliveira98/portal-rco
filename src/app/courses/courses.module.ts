import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CursosComponent } from './cursos/cursos.component';
import { CursoDetailsComponent } from './curso-details/curso-details.component';

@NgModule({
  declarations: [CursosComponent, CursoDetailsComponent],
  imports: [
    CommonModule,
    CoursesRoutingModule
  ]
})
export class CoursesModule { }
