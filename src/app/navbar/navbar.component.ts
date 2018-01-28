import { Component, OnInit } from '@angular/core';
import { forEach } from '@angular/router/src/utils/collection';
import { AreaService } from '../_services/area.service';
import { Area } from '../_models/area';

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
  links = [];

  /**
   * Areas
   *
   * @var Area[]
   */
  areas: Area[];

  /**
   * Page scroll
   *
   * @var
   */
  isScrolled = false;
  currPos: Number = 0;
  startPos: Number = 0;
  changePos: Number = 50;

  constructor(private areaService: AreaService) { }

  ngOnInit() {
    // Get the areas links
    this.getAreas();

    this.areas.forEach(element => {
      this.links.push({ label: element.label, url: element.url });
    });

    this.links.push({ label: 'Contactos', url: 'contactos' });
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

  getAreas(): void {
    this.areaService.getAreas()
      .subscribe(areas => this.areas = areas);
  }

}
