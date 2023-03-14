import { BaseService } from '../base-service/BaseService';
import { DrivingLicenceCatagory } from 'src/app/models/get/driving-licence-catagory';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DrivingLicenceCategoriesService extends BaseService<DrivingLicenceCatagory> {

  constructor(protected httpClient: HttpClient) {
    super(httpClient);
  }
  getResourceUrl(): string {
    return 'DrivingLicenceCatagory';
   }
}

