import { BaseService } from '../base-service/BaseService';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { VehicleMovementMaster } from 'src/app/models/get/vehicle-movement-master';
import { VictimMovementMaster } from 'src/app/models/get/victim-movement-master';

@Injectable({
  providedIn: 'root'
})
export class VechileMovementService  extends BaseService<VehicleMovementMaster>{

  constructor(protected httpClient: HttpClient) {
    super(httpClient);
  }
  getResourceUrl(): string {
    return 'VehicleMovementMaster';
   }
}
