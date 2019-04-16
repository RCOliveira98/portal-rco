import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CoursesService } from './../courses.service';
import { CursoModel } from '../curso.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-curso-details',
  templateUrl: './curso-details.component.html',
  styleUrls: ['./curso-details.component.css']
})
export class CursoDetailsComponent implements OnInit, OnDestroy {

  public currentCourse: CursoModel;
  public myInscricao: Subscription;

  constructor(private itemRouter: ActivatedRoute,
              private serviceCourseDetails: CoursesService) { }

  ngOnInit() {
    this.init();
  }

  ngOnDestroy() {
    this.myInscricao.unsubscribe();
  }

  /*
  private init(): void {
    const date = 'id';
    const courseId = this.itemRouter.snapshot.params[date];
    /* The first element of an array is always positioned in the zero index
     * O primeiro elemento de um array sempre está posicionado no índice zero
     *
    this.currentCourse = this.serviceCourseDetails.getCursosById(courseId - 1);
  }
  */
 // atendo as mudanças dos parametros das rotas.
  private init(): void {
    const date = 'id';
    let courseId = -1;
    this.myInscricao = this.itemRouter.params.subscribe(
      // passando uma function como argumento (callback)
      (myParams: any) => {
        courseId = myParams[date];
        this.currentCourse = this.serviceCourseDetails.getCursosById(courseId - 1);
      }
    );
  }



}
