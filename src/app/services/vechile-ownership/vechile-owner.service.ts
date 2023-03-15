import { BaseService } from '../base-service/BaseService';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { VehicleOwnership } from 'src/app/models/get/vehicle-ownership';

@Injectable({
  providedIn: 'root'
})
export class VechileOwnerService extends BaseService<VehicleOwnership> {


  constructor(protected httpClient: HttpClient) {
    super(httpClient);
  }
  getResourceUrl(): string {
    return 'VehicleOwnership';
   }
  }
