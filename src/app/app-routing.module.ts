import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasketballComponent } from './basketball/basketball.component';
import { FootballVideosComponent } from './football-videos/football-videos.component';
import { FootballComponent } from './football/football.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {path: '', redirectTo:'app-home', pathMatch: 'full'},
  {path: 'app-home', component: HomeComponent},
  {path: 'app-football', component: FootballComponent},
  {path:'app-football/app-football-videos', component: FootballVideosComponent },
  {path: 'app-basketball', component: BasketballComponent},
  {path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
