import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/AccountServices/auth.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-login-tab',
  templateUrl: './login-tab.component.html',
  styleUrls: ['./login-tab.component.css']
})
export class LoginTabComponent implements OnInit {
  model = new LoginModel()

  constructor(
    public authService: AuthService,
    private spinner: NgxSpinnerService
    ) { }

  ngOnInit(): void {
    
  }

  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response: ${captchaResponse}`);
  }

  onSubmit() { 
    // console.log(this.model)
    this.onSignIn()
  }

  onSignIn(){
    // console.log("Inicio onSignUp")
    this.spinner.show()
    this.authService.SignIn(this.model.email, this.model.password).then((result) => {
      // console.log("Then del onSignIn: ", result)
      this.spinner.hide()
    }).catch((error) => {
      // console.log("Catch del onSignIn: ", error)
      this.spinner.hide()
      window.alert(error.message)
    })
  }
}

export class LoginModel {
  public email: string
  public password: string
  public captchaX: string
  constructor(
  ) {  }
}
