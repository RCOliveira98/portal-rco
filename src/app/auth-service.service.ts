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
    console.log(user);
    if (user.name === 'rco' && user.senha === '123') {
      this.logado = true;
      // redirecione para home
      this.router.navigate(['home']);
    } else {
      alert('Login inválido.');
      this.logado = false;
    }

    this.evento.emit(this.logado);
  }

  public userAutenticado(): boolean {
    return this.logado;
  }
}
