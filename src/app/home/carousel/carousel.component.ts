import { Component, OnInit } from "@angular/core";
import { NgxCarousel } from "ngx-carousel";
import { Carousel } from "../../_models/carousel";
import { CarouselService } from "../../_services/carousel.service";

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

  /**
   * The carousel items
   *
   * @type array
   */
  _carouselTileItems: Carousel[];
  _carouselTile: NgxCarousel;

  constructor(private _carouselService: CarouselService) {}

  ngOnInit() {
    this._carouselService.getCarousels().subscribe(carousels => {
      this._carouselTileItems = carousels;
    });

    this._carouselTile = {
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
