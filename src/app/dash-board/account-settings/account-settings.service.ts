import { Injectable } from '@angular/core';
import { BankAccount } from './bank-account-update/bank-account.model';
import { Subject } from 'rxjs';
import { Profile } from './profile-update/profile.model';


@Injectable({providedIn: 'root'})
export class AccountSettingsService {
  accountChange = new Subject<BankAccount>();
  profileChange = new Subject<Profile>();
  bankAccount: BankAccount;
  profile: Profile;


  updateAccount(account: BankAccount) {
    this.bankAccount = account;
    this.accountChange.next(this.bankAccount)
    console.log(this.bankAccount);
  }

  getAccount() {
    return {...this.bankAccount};
  }
  updateProfile(profile: Profile) {
    this.profile = profile;
    this.profileChange.next(this.profile);
    console.log(profile);
  }
  getProfile() {
    return {...this.profile};
  }

}
