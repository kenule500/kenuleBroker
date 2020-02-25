import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashBoardComponent } from './dash-board.component';
import { MainComponent } from './main/main.component';
import { InvestComponent } from './invest/invest.component';
import { DepositComponent } from './deposit/deposit.component';
import { MyDepositsComponent } from './my-deposits/my-deposits.component';
import { MyWithdrawalsComponent } from './my-withdrawals/my-withdrawals.component';
import { MyInvestmentsComponent } from './my-investments/my-investments.component';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';
import { GeneralSettingsComponent } from './general-settings/general-settings.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';

const routes: Routes = [
  {path: 'dashboard', component: DashBoardComponent,
    children: [
      {path: 'main', component: MainComponent},
      {path: 'invest', component: InvestComponent},
      {path: 'deposit', component: DepositComponent},
      {path: 'my-deposits', component: MyDepositsComponent},
      {path: 'my-withdrawals', component: MyWithdrawalsComponent},
      {path: 'my-investments', component: MyInvestmentsComponent},
      {path: 'transactions-history', component: TransactionHistoryComponent},
      {path: 'general-settings', component: GeneralSettingsComponent},
      {path: 'account-settings', component: AccountSettingsComponent},
      {
        path: '',
        redirectTo: '/user/dashboard/main',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/user/dashboard/main',
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashBoardRoutingModule {}
