import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-contacts",
  templateUrl: "./contacts.component.html",
  styleUrls: ["./contacts.component.css"]
})
export class ContactsComponent implements OnInit {
  /**
   * @type array
   */
  _leftImage = {
    path: "/assets/icons/logo_2.png"
  };

  constructor() {}

  ngOnInit() {}
}
