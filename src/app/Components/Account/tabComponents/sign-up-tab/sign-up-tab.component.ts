import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/AccountServices/auth.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-sign-up-tab',
  templateUrl: './sign-up-tab.component.html',
  styleUrls: ['./sign-up-tab.component.css']
})
export class SignUpTabComponent implements OnInit {
  model = new SignUpModel()

  constructor(
    public authService: AuthService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    // console.log(this.model)
    this.onSignUp()
  }

  // TODO: Remove this when we're done
  // get diagnostic() { return JSON.stringify(this.model); }

  onSignUp() {
    // console.log("Inicio onSignUp")
    this.spinner.show()
    this.authService.SignUp(this.model.email, this.model.password, this.model.name).then((result) => {
      this.spinner.hide()
      // console.log("Then del onSignUp: ", result)
    }).catch((error) => {
      this.spinner.hide()
      // console.log("Catch del onSignUp: ", error)
      window.alert(error.message)
    })
  }
}

export class SignUpModel {
  public email: string
  public name: string
  public password: string
  constructor(
  ) { }
}