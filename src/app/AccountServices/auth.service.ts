import { Injectable, NgZone } from '@angular/core';
import { User } from './user';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router
  ) {}

  // Sign in with email/password
  SignIn(email, password) {
    return this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        // this.setUserData(result.user)
        localStorage.setItem('user', JSON.stringify(result.user));
        this.router.navigate(['continents']);
      });
  }

  // Sign up with email/password
  SignUp(email, password, displayName) {
    return this.afAuth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        result.user.updateProfile({displayName: displayName}).then(() => this.router.navigate(['login']) )
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }

  // Sign out
  SignOut() {
    console.log("En el SignOut")
    return this.afAuth.signOut().then(() => {
      // console.log("En el then del SignOut")
      localStorage.removeItem('user');
      this.router.navigate(['login']);
    });
  }

  // Returns true when user is looged in
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    // console.log('En el isLoggedIn de auth.service: ', user);
    return user !== null ? true : false;
  }

  get userName(): string {
    const user = JSON.parse(localStorage.getItem('user'));
    return user.displayName !== null ? user.displayName : user.email.split("@", 1); 
  }
}
