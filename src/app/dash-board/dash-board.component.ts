import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';
import { BankAccount } from './account-settings/bank-account-update/bank-account.model';
import { Profile } from './account-settings/profile-update/profile.model';
import { AccountSettingsService } from './account-settings/account-settings.service';
@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit, OnDestroy {
  notice1 = true;
  isAuth = false;
  bankAccount: BankAccount;
  bankNotice = false;
  profile: Profile;
  profileNotice = false;
  private accountSub: Subscription;
  private profileSub: Subscription;
  private userSub: Subscription;

  user = '';


  constructor(private authService: AuthService, private accountService: AccountSettingsService) { }

  ngOnInit() {
    this.accountSub = this.accountService.accountChange.subscribe(account => {
      if (account) {
        this.bankAccount = account;
        this.bankNotice = false;
      }  else {
        this.bankNotice = false;
        // this.bankNotice = true;
      }

    });
    this.profileSub = this.accountService.profileChange.subscribe(profile => {
      if (profile) {
        this.profile = profile;
        this.profileNotice = false;
      } else {
        this.bankNotice = false;
        // this.profileNotice = true;
      }

    });

    this.user = this.authService.getUser().email;


  }

  logout() {
    this.authService.logoutUser();
  }

  ngOnDestroy() {
    if (this.profileSub) {
      this.profileSub.unsubscribe();
    }
    if (this.accountSub) {
      this.accountSub.unsubscribe();
    }
    if (this.userSub) {
      this.userSub.unsubscribe();
    }

  }
  sideNav() {
    this.authService.sidenavToggle.next(true);
  }
  openNav() {
    document.getElementById('mySidenav').style.width = '250px';
    document.getElementById('feeds').style.marginLeft = '250px';
    document.body.style.backgroundColor = 'rgba(2,0,4,0.4)';
  }
 closeNav() {
    document.getElementById('mySidenav').style.width = '0';
    document.getElementById('feeds').style.marginLeft = '0';
    document.body.style.backgroundColor = 'white';
  }
}
