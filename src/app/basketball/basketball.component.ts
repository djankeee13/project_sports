import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basketball',
  templateUrl: './basketball.component.html',
  styleUrls: ['./basketball.component.scss']
})
export class BasketballComponent implements OnInit {
  toggleTeams:boolean = true;
  constructor() { }

  ngOnInit(): void {
  }
  toggleComponent(){
    this.toggleTeams =! this.toggleTeams;
  }
}
