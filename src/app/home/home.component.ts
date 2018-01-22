import { Component, OnInit } from '@angular/core';
import { Area } from '../_models/area';
import { AreaService } from '../_services/area.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  /**
   * The settings for the grid
   *
   * @type array
   */
  grid = {
    cols: '4',
    rowHeight: '200px'
  }

  /**
   * The image that will be shown in the homepage
   *
   * @type array
   */
  introImage = {
    path: '/assets/images/hunter-haley-424256.jpg',
    color: 'black',
  };

  /**
   * Areas to display
   *
   * @type array
   */
  areas: Area[];

  constructor(private areaService: AreaService) { }

  ngOnInit() {
    this.getAreas();
  }

  getAreas(): void {
    this.areaService.getAreas()
      .subscribe(areas => this.areas = areas);
  }

}
