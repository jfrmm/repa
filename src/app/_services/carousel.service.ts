import { Injectable } from "@angular/core";

import { Observable } from "rxjs/Observable";
import { of } from "rxjs/observable/of";

import { Carousel } from "../_models/carousel";
import { CAROUSELS } from "./mock-carousel";

@Injectable()
export class CarouselService {
  constructor() {}

  public getCarousels(): Observable<Carousel[]> {
    return of(CAROUSELS);
  }
}
