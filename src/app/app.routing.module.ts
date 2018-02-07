import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Components
import { DishDetailComponent } from './dish/dish-detail/dish-detail.component';
import { HomeComponent } from './home/home.component';
import { JourneyOverviewComponent } from './journey-overview/journey-overview.component';
import { LoginComponent } from './login/login.component';
import { ProgressBoxComponent } from './tracks/progress-box/progress-box.component';
import { TracksListComponent } from './tracks/tracks-list/tracks-list.component';
import { TrackComponent } from './tracks/track/track.component';
// AuthGuard
import { AuthGuardService } from './auth/auth-guard.service';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'tracks', component: TracksListComponent, canActivate: [AuthGuardService], children: [
      { path: ':trackId', component: JourneyOverviewComponent}
  ]}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    AuthGuardService
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }

export const routingComponents = [DishDetailComponent, HomeComponent, 
  JourneyOverviewComponent, LoginComponent, ProgressBoxComponent, TracksListComponent, TrackComponent];
