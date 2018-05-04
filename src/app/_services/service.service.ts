import { Injectable } from "@angular/core";

import { Observable } from "rxjs/Observable";
import { of } from "rxjs/observable/of";

import { Service } from "../_models/service";
import { SERVICES } from "./mock-service";

@Injectable()
export class ServiceService {
  constructor() {}

  public getServices(): Observable<Service[]> {
    return of(SERVICES);
  }
}
