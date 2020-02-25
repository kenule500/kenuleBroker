import { NgModule } from '@angular/core';
import { AboutUsComponent } from './about-us.component';
import { AboutUsRoutingModule } from './about-us-routing.module';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { TeamComponent } from './team/team.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AboutUsComponent,
    TeamComponent

  ],
  imports: [
    AboutUsRoutingModule,
    CommonModule,
    MaterialModule,
    FlexLayoutModule
  ]
})
export class AboutUsModule {}
