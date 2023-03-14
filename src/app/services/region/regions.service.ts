import { BaseService } from '../base-service/BaseService';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegionMaster } from 'src/app/models/post/region-master-model';

@Injectable({
  providedIn: 'root'
})
export class RegionsService extends BaseService<RegionMaster> {

  constructor(protected httpClient: HttpClient) {
    super(httpClient);
  }
  getResourceUrl(): string {
    return 'RegionMaster';
   }
}
