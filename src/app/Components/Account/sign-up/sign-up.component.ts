import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/AccountServices/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  model = new SignUpModel()

  constructor(
    public authService: AuthService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  onSubmit() { 
    console.log(this.model)
    this.onSignUp()
  }

  // TODO: Remove this when we're done
  // get diagnostic() { return JSON.stringify(this.model); }

  onSignUp(){
    console.log("Inicio onSignUp")
    this.authService.SignUp(this.model.email, this.model.password).then((result) => {
      console.log("Then del onSignUp: ", result)
    }).catch((error) => {
      console.log("Catch del onSignUp: ", error)
      window.alert(error.message)
    })
  }
}

export class SignUpModel {
  public email: string
  public name: string 
  public password: string
  constructor(
  ) {  }
}