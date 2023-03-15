import { BaseService } from '../base-service/BaseService';
import { DriverExperience } from 'src/app/models/get/driver-experience';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DriverExperienceService extends BaseService<DriverExperience>{

  constructor(protected httpClient: HttpClient) {
    super(httpClient);
  }
  getResourceUrl(): string {
    return 'DriverExperience';
   }
}
