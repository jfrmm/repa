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
    this.carouselTileItems = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

    this.carouselTile = {
      grid: { xs: 2, sm: 3, md: 3, lg: 5, all: 0 },
      slide: 2,
      speed: 400,
      animation: "lazy",
      point: {
        visible: true
      },
      load: 2,
      touch: true,
      easing: "ease"
    };
  }
  public carouselTileLoad(evt: any) {
    const len = this.carouselTileItems.length;
    if (len <= 30) {
      for (let i = len; i < len + 10; i++) {
        this.carouselTileItems.push(i);
      }
    }
  }

  // carouselLoad will trigger this funnction when your load value reaches
  // it is helps to load the data by parts to increase the performance of the app
  // must use feature to all carousel
}
