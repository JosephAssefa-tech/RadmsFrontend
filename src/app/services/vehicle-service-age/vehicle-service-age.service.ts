import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { VehicleServiceAge } from 'src/app/models/get/vehicle-service-age';
import { BaseService } from '../base-service/BaseService';

@Injectable({
  providedIn: 'root'
})
export class VehicleServiceAgeService extends BaseService<VehicleServiceAge>{

  constructor(protected httpClient: HttpClient) {
    super(httpClient);
  }
  getResourceUrl(): string {
    return 'VehicleServiceAge';
   }
}
