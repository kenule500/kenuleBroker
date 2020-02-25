import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashBoardComponent } from './dash-board.component';
import { DashBoardRoutingModule } from './dashboard-routing.module';
import { MainComponent } from './main/main.component';
import { InvestComponent } from './invest/invest.component';
import { DepositComponent } from './deposit/deposit.component';
import { MyDepositsComponent } from './my-deposits/my-deposits.component';
import { MyWithdrawalsComponent } from './my-withdrawals/my-withdrawals.component';
import { MyInvestmentsComponent } from './my-investments/my-investments.component';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';
import { DashboardService } from './dashboard.service';
import { AccountSettingsModule } from './account-settings/account-settings.module';
import { GeneralSettingsModule } from './general-settings/general-settings.module';

@NgModule({
  declarations:[
    DashBoardComponent,
    MainComponent,
    InvestComponent,
    DepositComponent,
    MyDepositsComponent,
    MyWithdrawalsComponent,
    MyInvestmentsComponent,
    TransactionHistoryComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    DashBoardRoutingModule,
    AccountSettingsModule,
    GeneralSettingsModule

  ],
  providers: [DashboardService]
})
export class DashBoardModule {}
