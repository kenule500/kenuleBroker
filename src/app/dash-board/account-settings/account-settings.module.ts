import { NgModule } from '@angular/core';
import { AccountSettingsComponent } from './account-settings.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material.module';
import { CommonModule } from '@angular/common';
import { BankAccountUpdateComponent } from './bank-account-update/bank-account-update.component';
import { BvnValidationComponent } from './bvn-validation/bvn-validation.component';
import { ProfileUpdateComponent } from './profile-update/profile-update.component';

@NgModule({
  declarations: [
    AccountSettingsComponent,
    BankAccountUpdateComponent,
    BvnValidationComponent,
    ProfileUpdateComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class AccountSettingsModule {}
