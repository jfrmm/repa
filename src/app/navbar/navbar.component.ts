import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  host: {
    '(window:scroll)': 'updateToolbar($event)'
  }
})
export class NavbarComponent implements OnInit {

  /**
   * Variables concerning page scroll
   *
   * @var
   */
  isScrolled = false;
  currPos: Number = 0;
  startPos: Number = 0;
  changePos: Number = 50;

  constructor() { }

  ngOnInit() {
  }

  /**
   * Listen to scroll and change toolbar's class when not on top
   *
   * @param e
   */
  updateToolbar(e) {
    this.currPos = (window.pageYOffset || e.target.scrollTop) - (e.target.clientTop || 0);
    if (this.currPos >= this.changePos) {
      this.isScrolled = true;
    } else {
      this.isScrolled = false;
    }
  }
}
