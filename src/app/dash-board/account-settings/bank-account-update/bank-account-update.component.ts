import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { AccountSettingsService } from '../account-settings.service';
import { BankAccount } from './bank-account.model';

@Component({
  selector: 'app-bank-account-update',
  templateUrl: './bank-account-update.component.html',
  styleUrls: ['./bank-account-update.component.css']
})
export class BankAccountUpdateComponent implements OnInit {
  bankAccount: FormGroup;
  account: BankAccount;
  constructor(private accountService: AccountSettingsService) { }

  ngOnInit() {
    this.bankAccount = new FormGroup({
      accountNumber: new FormControl('',
       { validators: [Validators.required, Validators.maxLength(10), Validators.minLength(10)]}),
      country: new FormControl('',
        {validators: Validators.required}),
      bankName: new FormControl('', {
        validators: Validators.required})
    })
    console.log(this.bankAccount.errors);
  }

  onSubmit() {
   this.accountService.updateAccount({
     accountNumber: this.bankAccount.value.accountNumber,
     country: this.bankAccount.value.country,
     bankName: this.bankAccount.value.bankName
   });
   this.account =  this.accountService.getAccount();
  }


}
