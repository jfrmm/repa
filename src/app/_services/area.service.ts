import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Area } from '../_models/area';
import { AREAS } from './mock-areas';

@Injectable()
export class AreaService {

  constructor() { }

  getAreas(): Observable<Area[]> {
    return of(AREAS);
  }
}
