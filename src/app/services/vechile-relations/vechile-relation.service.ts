import { BaseService } from '../base-service/BaseService';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { VehicleRelation } from 'src/app/models/get/vehicle-relation';

@Injectable({
  providedIn: 'root'
})
export class VechileRelationService extends BaseService<VehicleRelation> {

  constructor(protected httpClient: HttpClient) {
    super(httpClient);
  }
  getResourceUrl(): string {
    return 'VehicleRelation';
   }
}
