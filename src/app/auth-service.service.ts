import { Injectable, EventEmitter } from '@angular/core';
import { UserModel } from './login/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  user: UserModel;
  logado: boolean;
  evento = new EventEmitter<boolean>();
  constructor() { }

  public logar(user: UserModel): void {
    if (user.name === 'Romario' && user.senha === '123456') {
      this.logado = true;
    } else {
      this.logado = false;
    }

    this.evento.emit(this.logado);
  }
}
