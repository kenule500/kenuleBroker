import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-two-fa-settings',
  templateUrl: './two-fa-settings.component.html',
  styleUrls: ['./two-fa-settings.component.css']
})
export class TwoFaSettingsComponent implements OnInit {
  notice = false;
  constructor() { }

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
    this.notice = true;
    setInterval(() => {
      this.notice = false;
    }, 4000);
  }
}
