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
  _introImage = {
    color: "grey"
  };

  carouselTileItems: Array<any>;
  carouselTile: NgxCarousel;

  constructor() {}

  ngOnInit() {
    this.carouselTileItems = [
      {
        title: "Vidros partidos?",
        subTitle: "janelas novas em 24 horas",
        chip: "orçamentos grátis",
        background: "/assets/images/foto_slider_1.jpg"
      },
      {
        title: "Fechaduras avariadas?",
        subTitle: "Orçamentamos em 24 horas",
        chip: "orçamentos grátis",
        background: "/assets/images/foto_slider_2.jpg"
      },
      {
        title: "Esgotos entupidos?",
        subTitle: "Orçamentamos em 24 horas",
        chip: "orçamentos grátis",
        background: "/assets/images/foto_slider_3.jpg"
      },
      {
        title: "Torneiras avariadas?",
        subTitle: "Orçamentamos em 24 horas",
        chip: "orçamentos grátis",
        background: "/assets/images/foto_slider_4.jpg"
      }
    ];

    this.carouselTile = {
      grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
      slide: 1,
      speed: 250,
      interval: 53000,
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
