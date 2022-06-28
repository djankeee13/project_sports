import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasketballGamesComponent } from './basketball-games/basketball-games.component';
import { BasketballStatsComponent } from './basketball-stats/basketball-stats.component';
import { BasketballTeamsComponent } from './basketball-teams/basketball-teams.component';
import { BasketballComponent } from './basketball/basketball.component';
import { FootballStandingComponent } from './football-standing/football-standing.component';
import { FootballTeamsComponent } from './football-teams/football-teams.component';
import { FootballVideosComponent } from './football-videos/football-videos.component';
import { FootballComponent } from './football/football.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {path: '', redirectTo:'app-home', pathMatch: 'full'},
  {path: 'app-home', component: HomeComponent},
  {path: 'app-football', component: FootballComponent},
  {path:'app-football/app-football-videos', component: FootballVideosComponent },
  {path: 'app-football/app-football-standing', component: FootballStandingComponent},
  {path: 'app-football/app-football-teams', component: FootballTeamsComponent},
  {path: 'app-basketball', component: BasketballComponent},
  {path: 'app-basketball/app-basketball-teams', component: BasketballTeamsComponent},
  {path: 'app-basketball/app-basketball-games', component: BasketballGamesComponent},
  {path: 'app-basketball/app-basketball-stats', component: BasketballStatsComponent},
  {path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
