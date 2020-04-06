import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginModel } from './login.Model';
import { Router } from '@angular/router';
import { PublicService } from '../core/public-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  loginModel: LoginModel;
  loginErrorMSG: string = '';
  loader: boolean;
  isLoginSuccessfully: boolean;

  constructor(private _router: Router,
    private service: PublicService,

  ) {
    this.loginModel = new LoginModel();
    this.loader = false;
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.loginForm.controls[controlName].hasError(errorName);
  }

  ngOnInit(): void {
    // this._router.navigate(['/Navbar']);
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }
  login() {
    debugger;
    this._router.navigate(['users/list-users']);

    // this.service.post(this.loginModel, '', '').subscribe(
    //   res => {
    //     localStorage.setItem('Token', res.token);
    //     localStorage.setItem('Email', this.loginModel.email);
    //     console.log('logged in with token ==> ', res.token);
    //     this._router.navigate(['users/list-users']);
    //     this.isLoginSuccessfully = true;
    //   },
    //   error => {

    //   }
    // );
  }
}
