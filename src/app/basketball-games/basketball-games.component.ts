import { Component, OnInit } from '@angular/core';
import { ApibasketballService } from '../services/apibasketball.service';

@Component({
  selector: 'app-basketball-games',
  templateUrl: './basketball-games.component.html',
  styleUrls: ['./basketball-games.component.scss']
})
export class BasketballGamesComponent implements OnInit {
  games!: any;
  c_page: number = 1;
 isDisabled: boolean = false;

  constructor(private api: ApibasketballService) { }

  ngOnInit(): void {
    this.renderData();
  }
  renderData(){
    this.api.getGames(this.c_page)
    .subscribe( res => {
      this.games = res.data;
      console.log(this.games);
    })
    
  }
}
