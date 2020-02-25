import { NgModule } from '@angular/core';
import { GeneralSettingsComponent } from './general-settings.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { TwoFaSettingsComponent } from './two-fa-settings/two-fa-settings.component';
import { VerificationComponent } from './verification/verification.component';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    GeneralSettingsComponent,
    ChangePasswordComponent,
    TwoFaSettingsComponent,
    VerificationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule
  ]
})
export class GeneralSettingsModule {}
