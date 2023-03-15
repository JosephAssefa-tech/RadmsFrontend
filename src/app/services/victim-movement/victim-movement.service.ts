import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { VictimMovementMaster } from 'src/app/models/get/victim-movement-master';
import { BaseService } from '../base-service/BaseService';

@Injectable({
  providedIn: 'root'
})
export class VictimMovementService extends BaseService<VictimMovementMaster> {

  constructor(protected httpClient: HttpClient)  {
    super(httpClient);
  }
  getResourceUrl(): string {
    return 'VictimMovementMaster';
   }
}
