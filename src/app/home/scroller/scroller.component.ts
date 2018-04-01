import { Component, OnInit } from "@angular/core";

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

  slides = [
    { img: "http://placehold.it/350x150/000000" },
    { img: "http://placehold.it/350x150/111111" },
    { img: "http://placehold.it/350x150/333333" },
    { img: "http://placehold.it/350x150/666666" }
  ];
  slideConfig = { slidesToShow: 1, slidesToScroll: 1 };

  constructor() {}

  ngOnInit() {}
}
