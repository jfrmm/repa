import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-call-now",
  templateUrl: "./call-now.component.html",
  styleUrls: ["./call-now.component.css"]
})
export class CallNowComponent implements OnInit {
  /**
   * The image that will be the background
   *
   * @type array
   */
  private _introImage = {
    path: "/assets/images/hunter-haley-424239-unsplash.jpg",
    color: "brown"
  };

  constructor() {}

  ngOnInit() {}
}
