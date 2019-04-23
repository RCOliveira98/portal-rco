import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from './auth-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public userLogado: boolean;

  constructor(private auth: AuthServiceService) {
    this.userLogado = false;
  }

  ngOnInit() {
    this.auth.evento.subscribe(
      (myParams: boolean) => this.userLogado = myParams);
  }

}
