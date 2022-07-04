import { Component, OnInit } from '@angular/core';
import { ApibasketballService } from '../services/apibasketball.service';

@Component({
  selector: 'app-basketball-stats',
  templateUrl: './basketball-stats.component.html',
  styleUrls: ['./basketball-stats.component.scss']
})
export class BasketballStatsComponent implements OnInit {
 data! : any;
 meta! : any;
 c_page: number = 1;
 isDisabled: boolean = false;
  constructor(private api : ApibasketballService) { }

  ngOnInit(): void {
    this.renderData();
  }

  renderData(){
    this.api.getStats(this.c_page)
    .subscribe(res => {
      this.data = res.data;
      this.meta = res.meta;
      console.log(this.data, this.meta)
    })
  }
  nextPage(){
    console.log(this.c_page)
  /*   if(this.c_page === 1) { this.c_page = 2} */
    this.c_page ++;
    this.renderData();
   
  }
  previousPage(){
    this.c_page --;
    if(this.c_page < 1) {
      this.isDisabled = true;
      return;
    }
    this.renderData();
  }
  /* .afterClosed().subsccribe(res =>{
    this.renderData()
  }) */
  
}

