import { Component, OnInit } from '@angular/core';
import { ApifootballService } from '../services/apifootball.service';

@Component({
  selector: 'app-football-videos',
  templateUrl: './football-videos.component.html',
  styleUrls: ['./football-videos.component.scss']
})
export class FootballVideosComponent implements OnInit {
  videos!: any;
  constructor(private api : ApifootballService) { }

  ngOnInit(): void {
    this.renderVideos();
  }
  renderVideos(){
    this.api.getVideos()
    .subscribe({
      next: (res)=>{
        this.videos = res;
        console.table(this.videos);
      }
    })
  }
}
