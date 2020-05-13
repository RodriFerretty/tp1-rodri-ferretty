import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/AccountServices/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model = new LoginModel()

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
    this.authService.SignIn(this.model.email, this.model.password).then((result) => {
      console.log("Then del onSignIn: ", result)
      this.router.navigate(['continents'])
    }).catch((error) => {
      console.log("Catch del onSignIn: ", error)
      window.alert(error.message)
    })
  }
}

export class LoginModel {
  public email: string
  public password: string
  constructor(
  ) {  }
}