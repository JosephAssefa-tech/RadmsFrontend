import { Injectable } from '@angular/core';
import { VehicleDefect } from 'src/app/models/get/vehicle-defect';
import { BaseService } from '../base-service/BaseService';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VechileDefectsService extends BaseService<VehicleDefect>{

  constructor(protected httpClient: HttpClient) {
    super(httpClient);
  }
  getResourceUrl(): string {
    return 'VehicleDefect';
   }
}
