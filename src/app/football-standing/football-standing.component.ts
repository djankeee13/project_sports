import { Component, OnInit } from '@angular/core';
import { ApifootballService } from '../services/apifootball.service';

@Component({
  selector: 'app-football-standing',
  templateUrl: './football-standing.component.html',
  styleUrls: ['./football-standing.component.scss']
})
export class FootballStandingComponent implements OnInit {
  data!: any;
  stats!: any;
  id: any = '2020';

  leagues: any[] = [
    {value: 'eng.1', viewValue: 'England'},
    {value: 'fra.1', viewValue: 'France'},
    {value: 'ger.1', viewValue: 'Germany'},
    {value: 'ita.1', viewValue: 'Italy'},
    {value: 'esp.1', viewValue: 'Spain'},
    {value: 'arg.1', viewValue: 'Argentina'},
    {value: 'bra.1', viewValue: 'Brazil'},
    {value: 'chn.1', viewValue: 'China'},
    {value: 'ned.1', viewValue: 'Nederland'},
    {value: 'jpn.1', viewValue: 'Japan'},
    {value: 'por.1', viewValue: 'Portugal'},
    {value: 'rus.1', viewValue: 'Russia'},
    {value: 'tur.1', viewValue: 'Turkey'},
  ];
  selectedLeague = this.leagues[0].value;


  constructor(private api: ApifootballService) { }

  ngOnInit(): void {
    this.renderStanding('eng.1','2020')
  }
  renderStanding(pick: any,event : any){
     
    this.api.getSeason(pick, event )
    .subscribe(res => {
      this.data = res.data;
      this.stats = res.data.standings; 
     
     console.log(this.stats) 
    })
  
  }
}
