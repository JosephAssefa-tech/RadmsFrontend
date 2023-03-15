import { BaseService } from '../base-service/BaseService';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LightCondition } from 'src/app/models/get/light-condition';

@Injectable({
  providedIn: 'root'
})
export class LightConditionService extends BaseService<LightCondition> {

  constructor(protected httpClient: HttpClient)  {
    super(httpClient);
  }
  getResourceUrl(): string {
    return 'LightCondition';
   }
}

