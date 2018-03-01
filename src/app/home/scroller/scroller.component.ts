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

  constructor() {}

  ngOnInit() {}
}
