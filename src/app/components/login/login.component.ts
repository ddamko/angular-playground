import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  providers: [LoginService],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;

  constructor(private _formbuilder: FormBuilder, private _loginService:LoginService, private _router: Router) { }

  onSubmit() {
    this._loginService.checkUser(this.loginForm.value).subscribe(data => {

      if (!data) {
        alert('Wrong Credentials');

      } else {
        localStorage.setItem('token', data.result.token);
        localStorage.setItem('customer_id', data.result.custs_cid);
        this._router.navigate(['/dashboard']);
      }

    });
  }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.loginForm = this._formbuilder.group({
      'username': ['username', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(20)
      ]
    ],
    'password': ['password', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(15)
      ]
    ]
    });
  }
}
