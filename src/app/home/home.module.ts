import { NgModule } from '@angular/core';
import { WalletComponent } from './wallet/wallet.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MaterialModule } from '../material.module';
import { ReasonsComponent } from './reasons/reasons.component';
import { ReasonComponent } from './reasons/reason/reason.component';
import { TeamComponent } from './team/team.component';
import { PriceComponent } from './price/price.component';
import { AccessComponent } from './access/access.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    HomeComponent,
    WalletComponent,
    AboutUsComponent,
    ReasonsComponent,
    ReasonComponent,
    TeamComponent,
    PriceComponent,
    AccessComponent,
    SubscribeComponent
  ],
  imports:[
    CommonModule,
    FormsModule,
    HomeRoutingModule,
    MaterialModule
  ]
})
export class HomeModule {}
