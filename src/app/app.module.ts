import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TeamComponent } from './team/team.component';
import { EventsComponent } from './events/events.component';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { AppRoutingModule } from './app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FooterComponent } from './footer/footer.component';
import { HomeModule } from './home/home.module';
import { FormsModule } from '@angular/forms';
import { PackagesModule } from './packages/packages.module';
import { AboutUsModule } from './about-us/about-us.module';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/auth.service';
import { AccountSettingsService } from './dash-board/account-settings/account-settings.service';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireAuthModule} from '@angular/fire/auth';
import { environment } from 'src/environments/environment';
import { UIService } from './shared/ui.service';
import { ScrollTopService } from './scrolltop.service';



@NgModule({
  declarations: [
    AppComponent,
    TeamComponent,
    EventsComponent,
    HeaderComponent,
    SidenavListComponent,
    FooterComponent,
    TeamComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FlexLayoutModule,
    HomeModule,
    PackagesModule,
    AboutUsModule,
    AuthModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [AuthService, AccountSettingsService, UIService, ScrollTopService],
  bootstrap: [AppComponent]
})
export class AppModule { }
