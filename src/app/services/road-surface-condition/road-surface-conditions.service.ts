import { BaseService } from '../base-service/BaseService';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RoadSurfaceCondition } from 'src/app/models/get/road-surface-condition';

@Injectable({
  providedIn: 'root'
})
export class RoadSurfaceConditionsService extends BaseService<RoadSurfaceCondition> {

  constructor(protected httpClient: HttpClient) {
    super(httpClient);
  }
  getResourceUrl(): string {
    return 'RoadSurfaceConditionLookup';
   }
}
