import { BaseService } from '../base-service/BaseService';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RoadCarriageway } from 'src/app/models/get/road-carriageway';

@Injectable({
  providedIn: 'root'
})
export class RoadCarriagewayService extends BaseService<RoadCarriageway> {

  constructor(protected httpClient: HttpClient) {
    super(httpClient);
  }
  getResourceUrl(): string {
    return 'RoadCarriagewayType';
   }
}

