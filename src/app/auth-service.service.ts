import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { User } from './shared/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  user: User;
  logado: boolean;
  evento = new EventEmitter<boolean>();
  constructor(private router: Router) {

    this.user = {
      name: 'Romário Coelho Oliveira',
      email: 'rco@email.com',
      password: '123RCO',
      address: {
        nation: 'Brasil',
        cep: '64800000',
        state: 'PI',
        district: 'Irapua I',
        publicPlace: 'Avenida Euripedes',
        houseNumber: '1726',
        complement: 'Casa das telhas'
      },
      kind: 2,
      person: {
        id: 1,
        cpf: '12352100059',
        dataNascimento: new Date(2000, 10, 20),
        phone: '899944122'
      }
    };

  }

  public logar(u: User): void {
    if (u.email === this.user.email && u.password === this.user.password) {
      this.logado = true;
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
