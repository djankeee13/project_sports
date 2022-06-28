import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FootballComponent } from './football/football.component';
import { BasketballComponent } from './basketball/basketball.component';
import { NotfoundComponent } from './notfound/notfound.component';
import {MatMenuModule} from '@angular/material/menu';
import { FootballVideosComponent } from './football-videos/football-videos.component';
import { FootballStandingComponent } from './football-standing/football-standing.component';
import { FootballTeamsComponent } from './football-teams/football-teams.component';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { BasketballTeamsComponent } from './basketball-teams/basketball-teams.component';
import { BasketballGamesComponent } from './basketball-games/basketball-games.component';
import { BasketballStatsComponent } from './basketball-stats/basketball-stats.component';
import { BasketballTeamsChildComponent } from './basketball-teams-child/basketball-teams-child.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FootballComponent,
    BasketballComponent,
    NotfoundComponent,
    FootballVideosComponent,
    FootballStandingComponent,
    FootballTeamsComponent,
    BasketballTeamsComponent,
    BasketballGamesComponent,
    BasketballStatsComponent,
    BasketballTeamsChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    HttpClientModule,
    FormsModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
