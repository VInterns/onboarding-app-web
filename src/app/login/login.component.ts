import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginModel } from './login.Model';
import { Router } from '@angular/router';
import { PublicService } from '../core/public-service.service';
import { AuthService } from '../core/auth.service';

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
    private _authservice: AuthService,

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
    this.loader = true;
    // this._authservice.login(this.loginModel).subscribe(
    //   (res: any) => {
    //     this.loader = false;
    //     localStorage.setItem('Token', res.token);
    //     localStorage.setItem('Email', this.loginModel.email);
    //     console.log('logged in with token ==> ', res.token);
    //     this._router.navigate(['users/list-users']);
    //     this.isLoginSuccessfully = true;
    //   },
    //   (error: any) => {
    //     this.loader = false;
    //     console.log(error);
    //     if (error.error.text == 'User Already Logged In') {
    //       this.loginErrorMSG = error.text;
    //     } else if (error.error.text == 'Invalid Email or password') {
    //       this.loginErrorMSG = 'Login failed ! Invalid email or password';
    //     } else {
    //       this.loginErrorMSG =
    //         'Server error when trying to connect to backend sever, please refresh page. If issue presists; please contact IT Service Desk.';
    //     }
    //   });
  }
}
