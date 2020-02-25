import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagesComponent } from './images/images.component';
import { PackagesRoutingModule } from './packages-routing.module';
import { PackagesComponent } from './packages.component';
import { MaterialModule } from '../material.module';
import { WePlanComponent } from './we-plan/we-plan.component';
import { WePayComponent } from './we-pay/we-pay.component';
import { SchoolFeesComponent } from './we-pay/school-fees/school-fees.component';
import { RentComponent } from './we-pay/rent/rent.component';
import { SeniorRetreatComponent } from './senior-retreat/senior-retreat.component';
import { RideComponent } from './ride/ride.component';
import { RealEstateComponent } from './real-estate/real-estate.component';

@NgModule({
  declarations: [
    PackagesComponent,
    ImagesComponent,
    WePlanComponent,
    WePayComponent,
    SchoolFeesComponent,
    RentComponent,
    SeniorRetreatComponent,
    RideComponent,
    RealEstateComponent
  ],
  imports: [
    CommonModule,
    PackagesRoutingModule,
    MaterialModule

  ],

})
export class PackagesModule {}
