import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  introImage = {
    path: '/assets/images/hunter-haley-424256.jpg',
    color: 'black',
  };

  tiles = [
    { text: 'One', cols: 4, rows: 1, color: 'lightblue' },
    { text: 'Two', cols: 4, rows: 1, color: 'lightgreen' },
    { text: 'Three', cols: 4, rows: 1, color: 'lightpink' },
    { text: 'Four', cols: 4, rows: 1, color: '#DDBDF1' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
