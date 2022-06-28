import { Component, OnInit } from '@angular/core';
import { ApibasketballService } from '../services/apibasketball.service';

@Component({
  selector: 'app-basketball-teams',
  templateUrl: './basketball-teams.component.html',
  styleUrls: ['./basketball-teams.component.scss']
})
export class BasketballTeamsComponent implements OnInit {
  teams! : any;
  constructor(private api: ApibasketballService) { }

  ngOnInit(): void {
    this.renderData()
  }

  renderData(){
    this.api.getTeams()
    .subscribe( res => {
      this.teams = res.data;
      console.log(this.teams)
    })
  }
}
