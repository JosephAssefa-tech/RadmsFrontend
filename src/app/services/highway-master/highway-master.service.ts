import { BaseService } from '../base-service/BaseService';
import { HighwayMaster } from 'src/app/models/get/highway-master';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HighwayMasterService extends BaseService<HighwayMaster> {

  constructor(protected httpClient: HttpClient) {
    super(httpClient);
  }
  getResourceUrl(): string {
    return 'HighwayMaster';
   }
}

