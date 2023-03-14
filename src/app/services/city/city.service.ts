import { BaseService } from '../base-service/BaseService';
import { CityMaster } from 'src/app/models/get/city';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CityService extends BaseService<CityMaster> {

  constructor(protected httpClient: HttpClient) {
    super(httpClient);
  }
  getResourceUrl(): string {
    return 'CityMaster';
   }
}
