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
   * Links
   *
   * @var array
   */
  links = [
    { url: 'canalizacao', label: 'Canalização' },
    { url: 'electricidade', label: 'Electricidade' },
    { url: 'gas', label: 'Gás' },
    { url: 'estores', label: 'Estores' },
    { url: 'electrodomesticos', label: 'Electrodomésticos' },
    { url: 'contactos', label: 'Contactos' },
  ]

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
