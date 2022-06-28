import { Component, OnInit } from '@angular/core';
import { ApifootballService } from '../services/apifootball.service';

@Component({
  selector: 'app-football-teams',
  templateUrl: './football-teams.component.html',
  styleUrls: ['./football-teams.component.scss']
})
export class FootballTeamsComponent implements OnInit {
  leagues!: any;
  constructor(private api: ApifootballService) { }

  ngOnInit(): void {
    this.renderLeague();
  }
  renderLeague(){
    this.api.getLeague()
    .subscribe(res => {
      this.leagues = res.data;
      /* console.log(this.leagues) */
    })
  }
 
}
