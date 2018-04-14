import { Component, OnInit } from "@angular/core";
import { NgxCarousel } from "ngx-carousel";

@Component({
  selector: "app-scroller",
  templateUrl: "./scroller.component.html",
  styleUrls: ["./scroller.component.css"]
})
export class ScrollerComponent implements OnInit {
  /**
   * The image that will be the background
   *
   * @type array
   */
  private _introImage = {
    path: "/assets/images/hunter-haley-424256.jpg",
    color: "grey"
  };

  public carouselTileItems: Array<any>;
  public carouselTile: NgxCarousel;

  constructor() {}

  ngOnInit() {
    this.carouselTileItems = [
      {
        title: "Vidros partidos?",
        subTitle: "janelas novas em 24 horas"
      },
      {
        title: "Estores bloqueados?",
        subTitle: "Reparamos estores em 24 horas"
      },
      {
        title: "Esgotos entupidos?",
        subTitle: "Orçamentamos em 24 horas"
      }
    ];

    this.carouselTile = {
      grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
      slide: 1,
      speed: 250,
      interval: 3000,
      animation: "lazy",
      point: {
        visible: true
      },
      touch: true,
      easing: "ease",
      loop: true
    };
  }
}
