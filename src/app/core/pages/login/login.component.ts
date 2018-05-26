import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { finalize } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';

// import 'rxjs/add/operator/finally';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  loading = false;

  constructor(public service: LoginService) { }

  ngOnInit() {

  }

  login() {
    this.loading = true;
    this.service.login(this.username, this.password)
      .pipe(
        finalize(() => this.loading = false)
      )
      .subscribe(x => {
        console.log('Entro');
      }, err => {
        console.log(err.message);
      });

  }

}
