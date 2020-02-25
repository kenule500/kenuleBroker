import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AccountSettingsService } from '../account-settings.service';
import { Profile } from './profile.model';

@Component({
  selector: 'app-profile-update',
  templateUrl: './profile-update.component.html',
  styleUrls: ['./profile-update.component.css']
})
export class ProfileUpdateComponent implements OnInit {
  profile: Profile;
  constructor(private accountSettingsService: AccountSettingsService) { }

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
    this.accountSettingsService.updateProfile({
      fullName: f.value.fullName,
      gender: f.value.gender,
      state: f.value.state,
      street: f.value.street,
      birthdate: f.value.birthdate,
      country: f.value.country,
      town: f.value.town,
      houseNo: f.value.houseNo
    });
    this.profile = this.accountSettingsService.getProfile();
    console.log(this.profile);
  }

}
