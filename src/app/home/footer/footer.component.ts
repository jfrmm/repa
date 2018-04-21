import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.css"]
})
export class FooterComponent implements OnInit {
  /**
   * @type array
   */
  private _introImage = {
    color: "grey"
  };

  /**
   * @type array
   */
  private _leftImage = {
    path: "/assets/icons/logo_2.png"
  };

  constructor() {}

  ngOnInit() {}
}
