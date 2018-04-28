import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-description",
  templateUrl: "./description.component.html",
  styleUrls: ["./description.component.css"]
})
export class DescriptionComponent implements OnInit {
  /**
   * @type array
   */
  _leftImage = {
    path: "/assets/images/fundo_padrao_1.jpg",
    color: "white"
  };

  /**
   * @type array
   */
  _rightImage = {
    path: "/assets/icons/logo_2.png"
  }

  constructor() {}

  ngOnInit() {}
}
