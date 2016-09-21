import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  providers: [LoginService],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;

  constructor(private _formbuilder: FormBuilder, private _loginService:LoginService) { }

  onSubmit() {
    this._loginService.checkUser(this.loginForm.value).subscribe(data => {
      console.log(data.result);
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
