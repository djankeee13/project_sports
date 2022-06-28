import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApifootballService {

  constructor(private http : HttpClient) { }

  getLeague(){
    return this.http.get<any>('https://api-football-standings.azharimm.site/leagues')
  }

  getVideos(){
    return this.http.get<any>(environment.baseUrl,{
      headers: new HttpHeaders()
      .set(environment.XRapidAPIHostHeaderName, environment.XRapidAPIHostHeaderValue)
      .set(environment.XRapidAPIKeyHeaderName, environment.XRapidAPIKeyHeaderValue),
    })
  }

  getSeason(pick: any, id: any){
    return this.http.get<any>(`https://api-football-standings.azharimm.site/leagues/${pick}/standings?season=${id}&sort=asc`)
  } 
}

