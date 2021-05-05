import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import {AuthenticationService} from "../../service/authentication.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = ''
  password = ''
  invalidLogin = false

  @Input() error: string | null;

  constructor(private router: Router,
    private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }

  checkLogin() {
    (this.authenticationService.authenticate(this.username, this.password).subscribe(
      data => {
        this.router.navigate(['books'])
        this.invalidLogin = false
        console.log(data);

      },
      error => {
        this.invalidLogin = true
        this.error = error.message;
        console.log(error);
      }
    )
    );

  }

}
