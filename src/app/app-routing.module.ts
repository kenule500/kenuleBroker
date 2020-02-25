import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { TeamComponent } from './team/team.component';
import { EventsComponent } from './events/events.component';
import { AuthGuard } from './auth/auth.guard';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'home', loadChildren: './home/home.module#HomeModule' },
  {path: 'about-us', component: AboutUsComponent},
  {path: 'team', component: TeamComponent},
  {path: 'events', component: EventsComponent},
  {path: 'user', loadChildren: './dash-board/dashboard.module#DashBoardModule', canLoad: [AuthGuard]},
  {path: 'packages', loadChildren: './packages/packages.module#PackagesModule'}
];


@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
  providers: [AuthGuard]
})

export class AppRoutingModule {};

