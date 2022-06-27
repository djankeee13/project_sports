import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  menu_icon_varaiable: boolean = false;
  menuVariable: boolean = false
  constructor() { }

  ngOnInit(): void {
  }
  openMenu(){
    this.menuVariable = !this.menuVariable;
  }
}
