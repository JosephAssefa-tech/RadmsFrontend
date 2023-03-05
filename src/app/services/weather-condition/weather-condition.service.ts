import { BaseService } from '../base-service/BaseService';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WeatherCondition } from 'src/app/models/get/weather-condition-model';

@Injectable({
  providedIn: 'root'
})
export class WeatherConditionService extends BaseService<WeatherCondition> {

  constructor(protected httpClient: HttpClient) {
    super(httpClient);
  }
  getResourceUrl(): string {
    return 'WeatherConditionType';
   }
}
