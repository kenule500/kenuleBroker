import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UIService } from 'src/app/shared/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit, OnDestroy {
  signinForm: FormGroup;
  isLoading =  false;
  loadingSub: Subscription;
  constructor(private authService: AuthService, private uiService: UIService) { }

  ngOnInit() {
    this.loadingSub = this.uiService.loadingStateChanged.subscribe(isLoading => {
      this.isLoading = isLoading;
    })
    this.signinForm = new FormGroup({
      email: new FormControl('', { validators: [Validators.required, Validators.email]}),
      password: new FormControl('', {validators: [Validators.minLength(6), Validators.required]})
    });
  }

  onSubmit() {
    this.authService.loginUser({
      email: this.signinForm.value.email,
      password: this.signinForm.value.password
    });
  }
  ngOnDestroy() {
    if (this.loadingSub) {
      this.loadingSub.unsubscribe();
    }
  }
}
