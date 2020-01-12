import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthServiceService } from '../auth-service.service';

import { User } from '../shared/user.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user = new User(); // necessário instanciar o objeto
  public logado: boolean;
  @ViewChild('formLogin') form: NgForm;

  constructor(private autenticate: AuthServiceService) { }

  ngOnInit() {
    this.logado = false;
    // this.evento = new EventEmitter<boolean>();
  }

  onSubmit() {
    this.logar();
  }

  public logar(): void {
    console.log(this.form.value);
    this.autenticate.logar(this.form.value);
  }

}
