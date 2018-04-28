import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-goto-top",
  templateUrl: "./goto-top.component.html",
  styleUrls: ["./goto-top.component.css"]
})
export class GotoTopComponent implements OnInit {
  /**
   * If true, scrolling will be animated. False by default.
   *
   * @type boolean
   */
  _animate: boolean;

  /**
   * Speed of animated scroll. Must be greater than 1. 80 by default.
   *
   * @type number
   */
  _speed: number;

  /**
   * Number of pixels to speed up when scrolling is animated.
   * Zero by default - this way page will be scrolled top with the constant speed.
   *
   * @type number
   */
  _acceleration: number;

  /**
   * Number of pixels to be scrolled Y for button to be shown.
   * Defaults to 200px. Must be greater than zero.
   *
   * @type number
   */
  _scrollDistance: number;

  /**
   * User-defined styles config for the button.
   *
   * @type array
   */
  _styles;

  constructor() {
    this._animate = true;
    this._speed = 150;
    this._acceleration = 2;
    this._scrollDistance = 50;
    this._styles = {
      "padding-top": "6px"
    };
  }

  ngOnInit() {}
}
