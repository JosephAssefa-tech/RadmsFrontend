import { BaseService } from '../base-service/BaseService';
import { HighwayType } from 'src/app/models/get/highway-type';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HighwayTypeService extends BaseService<HighwayType> {

  constructor(protected httpClient: HttpClient) {
    super(httpClient);
  }
  getResourceUrl(): string {
    return 'HighwayType';
   }
}
