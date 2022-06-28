import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-basketball-teams-child',
  templateUrl: './basketball-teams-child.component.html',
  styleUrls: ['./basketball-teams-child.component.scss']
})
export class BasketballTeamsChildComponent implements OnInit {
  @Input() bindName!: any;
  @Input() abb!: any;
  @Input() city! : any;
  @Input() conference! : any;
  @Input() division : any;


  constructor() { }

  ngOnInit(): void {
  }

}
