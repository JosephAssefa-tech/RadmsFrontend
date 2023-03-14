import { BaseService } from '../base-service/BaseService';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SpeedLimit } from 'src/app/models/get/speed-limit';

@Injectable({
  providedIn: 'root'
})
export class SpeedLimitService extends BaseService<SpeedLimit>  {

  constructor(protected httpClient: HttpClient) {
    super(httpClient);
  }
  getResourceUrl(): string {
    return 'SpeedLimit';
   }
}
