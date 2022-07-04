import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApibasketballService {

  constructor(private http : HttpClient ) { }

  getTeams(){
    return this.http.get<any>('https://free-nba.p.rapidapi.com/teams' ,{
      headers: new HttpHeaders()
      .set( 'X-RapidAPI-Host', 'free-nba.p.rapidapi.com')
      .set('X-RapidAPI-Key', '64a8892e4fmshd7b99b6842df0c7p1ea89ejsn323053caf5e9'),
      params: new HttpParams()
      .set('page', 0)
    })
  }
  getStats(next: number){
    return this.http.get<any>('https://free-nba.p.rapidapi.com/stats' ,{
      headers: new HttpHeaders()
      .set( 'X-RapidAPI-Host', 'free-nba.p.rapidapi.com')
      .set('X-RapidAPI-Key', '64a8892e4fmshd7b99b6842df0c7p1ea89ejsn323053caf5e9'),
      params: new HttpParams()
      .set('page', next)
      .set('per_page', 6)
    })
  }
  getGames(next: number){
    return this.http.get<any>('https://free-nba.p.rapidapi.com/games' ,{
      headers: new HttpHeaders()
      .set( 'X-RapidAPI-Host', 'free-nba.p.rapidapi.com')
      .set('X-RapidAPI-Key', '64a8892e4fmshd7b99b6842df0c7p1ea89ejsn323053caf5e9'),
      params: new HttpParams()
      .set('page', 1)
      .set('per_page', 6)
    })
  }
}
