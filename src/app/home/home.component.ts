import { Component, OnInit } from "@angular/core";
import { Area } from "../_models/area";
import { AreaService } from "../_services/area.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  /**
   * Areas to display
   *
   * @type array
   */
  public areas: Area[];

  constructor(private _areaService: AreaService) {}

  ngOnInit() {
    this.getAreas();
  }

  public getAreas(): void {
    this._areaService.getAreas().subscribe(areas => (this.areas = areas));
  }
}
