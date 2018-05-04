import { Component, OnInit } from "@angular/core";
import { NgxCarousel } from "ngx-carousel";

@Component({
  selector: "app-carousel",
  templateUrl: "./carousel.component.html",
  styleUrls: ["./carousel.component.css"]
})
export class CarouselComponent implements OnInit {
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
        title: "Vidros e estores",
        subTitle: "instalação, reparação e substituição",
        chip: "orçamentos grátis",
        background: "/assets/images/foto_slider_1.jpg"
      },
      {
        title: "Electricidade",
        subTitle: "instalações e reparações",
        chip: "orçamentos grátis",
        background: "/assets/images/foto_slider_2.jpg"
      },
      {
        title: "Gás",
        subTitle: "instalações e reparações",
        chip: "orçamentos grátis",
        background: "/assets/images/foto_slider_3.jpg"
      },
      {
        title: "Canalizações e desentupimentos",
        subTitle: "instalações, reparações e substituição",
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
