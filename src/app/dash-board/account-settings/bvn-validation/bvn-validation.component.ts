import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-bvn-validation',
  templateUrl: './bvn-validation.component.html',
  styleUrls: ['./bvn-validation.component.css']
})
export class BvnValidationComponent implements OnInit {
  bvnForm: FormGroup;
  notice = false;
  constructor() { }

  ngOnInit() {
    this.bvnForm = new FormGroup({
      bvn: new FormControl('', {
        validators: [Validators.required]})
    });
  }

  onSubmit() {
    this.notice = true;
    setInterval(() => {
      this.notice = false;
    }, 4000);
  }
}
