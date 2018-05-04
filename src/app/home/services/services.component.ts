import { Component, OnInit } from "@angular/core";
import { Service } from "../../_models/service";
import { ServiceService } from "../../_services/service.service";

@Component({
  selector: "app-services",
  templateUrl: "./services.component.html",
  styleUrls: ["./services.component.css"]
})
export class ServicesComponent implements OnInit {
  /**
   * @type var
   */
  _background = {
    path: "/assets/images/foto_background_servicos.jpg",
    color: "black"
  };

  /**
   * @type array
   */
  _services: Service[];

  constructor(private _serviceService: ServiceService) {}

  ngOnInit() {
    this._serviceService.getServices().subscribe(services => {
      this._services = services;
    });
  }
}
