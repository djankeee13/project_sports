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
    FootballTeamsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
