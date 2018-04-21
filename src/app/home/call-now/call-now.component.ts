import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-call-now",
  templateUrl: "./call-now.component.html",
  styleUrls: ["./call-now.component.css"]
})
export class CallNowComponent implements OnInit {
  /**
   * @type array
   */
  private _introImage = {
    path: "/assets/images/foto_fundo_telefone.jpg",
    color: "brown"
  };

  constructor() { }

  ngOnInit() { }
}
