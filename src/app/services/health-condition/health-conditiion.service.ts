import { BaseService } from '../base-service/BaseService';
import { HealthCondition } from 'src/app/models/get/health-condition';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HealthConditiionService extends BaseService<HealthCondition>  {

  constructor(protected httpClient: HttpClient) {
    super(httpClient);
  }
  getResourceUrl(): string {
    return 'HealthCondition';
   }
}
