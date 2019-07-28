import { Component, OnInit } from '@angular/core';
import { UserModel } from './user.model';
import { EventEmitter } from 'events';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user = new UserModel(); // necessário instanciar o objeto
  public logado: boolean;
  constructor(private autenticate: AuthServiceService) { }

  ngOnInit() {
    this.logado = false;
    // this.evento = new EventEmitter<boolean>();
  }

  public logar(name: string, pwd: string): void {
    this.user.name = name;
    this.user.senha = pwd;
    this.autenticate.logar(this.user);
  }

}
