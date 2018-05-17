import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-map-social",
  templateUrl: "./map-social.component.html",
  styleUrls: ["./map-social.component.css"]
})
export class MapSocialComponent implements OnInit {
  lat: number = 38.721976;
  lng: number = -9.139186;
  zoom: number = 12;

  constructor() {}

  ngOnInit() {}
}
