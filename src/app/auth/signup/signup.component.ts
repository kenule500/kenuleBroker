import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { mustMatch } from './must-match.validator';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  // @ViewChild('pwInput', {static: true}) pwInput: ElementRef;
  // @ViewChild('pwInput2', {static: true}) pwInput2: ElementRef;
  signupForm: FormGroup;
  pw1: any;
  pw2: any;
  password = false;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      email: new FormControl('', {
        validators: [Validators.required, Validators.email]
      }),
      pass1: new FormControl('', {
        validators: [Validators.required, Validators.minLength(6)]
      }),
      pass2: new FormControl('', {
        validators: [mustMatch, Validators.required]
      }),
      check: new FormControl(null, {validators: Validators.required})
    });


  }

  onSubmit() {
    this.authService.registerUser({
      email: this.signupForm.value.email,
      password: this.signupForm.value.pass1
    });
  }

}
