import { Injectable, EventEmitter } from '@angular/core';
import { UserModel } from './login/user.model';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  user: UserModel;
  logado: boolean;
  evento = new EventEmitter<boolean>();
  constructor(private router: Router) { }

  public logar(user: UserModel): void {
    if (user.name === 'Romario' && user.senha === '123456') {
      this.logado = true;
      // redirecione para home
      this.router.navigate(['home']);
    } else {
      this.logado = false;
    }

    this.evento.emit(this.logado);
  }
}
