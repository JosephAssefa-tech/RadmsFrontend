import { Observable, of } from 'rxjs';

import { BaseService } from '../base-service/BaseService';
import { CityMaster } from 'src/app/models/get/city';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SubCityMaster } from 'src/app/models/get/subcity';

@Injectable({
  providedIn: 'root'
})
export class SubCityService extends BaseService<SubCityMaster>{
  constructor(protected httpClient: HttpClient) {
    super(httpClient);
  }
  getResourceUrl(): string {
    return 'SubCityMaster';
   }
}
