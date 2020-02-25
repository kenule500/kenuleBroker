import { Injectable, Output, EventEmitter } from '@angular/core';
import { User } from './user.model';
import { AuthData } from './authData-model';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { MatSnackBar } from '@angular/material';
import {UIService} from '../shared/ui.service';


@Injectable({providedIn: 'root'})
export class AuthService {
  sidenavToggle = new Subject<boolean>();
  private user: User;
  authChange = new Subject<boolean>();
  userChange = new Subject<User>();
  isAuthenticated = false;


  constructor(private router: Router,
              private afAuth: AngularFireAuth,
              private snackbar: MatSnackBar,
              private uiService: UIService) {}

  registerUser(authData: AuthData) {
    this.uiService.loadingStateChanged.next(true);
    this.afAuth.auth.createUserWithEmailAndPassword(authData.email, authData.password)
    .then(result => {
      this.uiService.loadingStateChanged.next(false);
      this.initAuthListener();
      console.log(result);
      this.user = {
        email: result.user.email,
        userId: result.user.uid
      };
    })
    .catch(error => {
      this.uiService.loadingStateChanged.next(false);
      this.snackbar.open(error.message, null, {
        duration: 3000
      });
    });

    this.userChange.next(this.user);
  }

  loginUser(authData: AuthData) {
    this.uiService.loadingStateChanged.next(true);
    this.afAuth.auth.signInWithEmailAndPassword(authData.email, authData.password)
    .then(result => {
      this.uiService.loadingStateChanged.next(false);
      this.initAuthListener()
      console.log(result);
      this.user = {
        email: result.user.email,
        userId: result.user.uid
      };

    })
    .catch(error => {
      this.uiService.loadingStateChanged.next(false);
      this.snackbar.open(error.message, null, {
        duration: 3000
      });
    });
    this.userChange.next(this.user);
  }


  logoutUser() {
    this.afAuth.auth.signOut();
    this.router.navigate(['/signin']);
  }
  getUser() {
    return this.user;
  }
  isAuth() {
    return this.isAuthenticated;
  }

  initAuthListener() {
    this.afAuth.authState.subscribe( user => {
      if (user) {
        this.isAuthenticated = true;
        this.authChange.next(true);
        this.router.navigate(['/user/dashboard/main']);
        this.user = {
          email: user.email,
          userId: user.uid
        };
      } else {
        this.user = null;
        this.authChange.next(false);

        this.isAuthenticated = false;
      }
    })
  }
}
// starboy@gds.com
