import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CoursesService } from './../courses.service';
import { CursoModel } from '../curso.model';

@Component({
  selector: 'app-curso-details',
  templateUrl: './curso-details.component.html',
  styleUrls: ['./curso-details.component.css']
})
export class CursoDetailsComponent implements OnInit {

  public currentCourse: CursoModel;

  constructor(private itemRouter: ActivatedRoute,
              private serviceCourseDetails: CoursesService) { }

  ngOnInit() {
    this.init();
  }

  private init(): void {
    const date = 'id';
    const courseId = this.itemRouter.snapshot.params[date];
    /* The first element of an array is always positioned in the zero index
     * O primeiro elemento de um array sempre está posicionado no índice zero
     */
    this.currentCourse = this.serviceCourseDetails.getCursosById(courseId - 1);
  }

}
