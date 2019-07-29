import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { AlunoDetailsComponent } from './../student/aluno-details/aluno-details.component';

@Injectable()
export class DeactivateTest implements CanDeactivate<AlunoDetailsComponent> {
  canDeactivate(
    component: AlunoDetailsComponent,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {

    return component.changeComponent();
  }
}
