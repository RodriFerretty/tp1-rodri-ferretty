import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/AccountServices/auth.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up-tab',
  templateUrl: './sign-up-tab.component.html',
  styleUrls: ['./sign-up-tab.component.css']
})
export class SignUpTabComponent implements OnInit {
  signUpForm: FormGroup;

  constructor(public authService: AuthService, private spinner: NgxSpinnerService) { 
    this.signUpForm = this.createFormGroup();
  }

  ngOnInit(): void { }

  onSubmit() {
    // console.log(this.model)
    this.onSignUp()
  }

  get model() {
    return this.signUpForm.controls;
  }

  createFormGroup() {
    return new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }
  
  onSignUp() {
    this.spinner.show()
    this.authService.SignUp(this.model.email.value, this.model.password.value, this.model.username.value).then((result) => {
      this.spinner.hide()
    }).catch((error) => {
      this.spinner.hide()
      window.alert(error.message)
    })
  }
}