import { BaseService } from '../base-service/BaseService';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { VechicleMasterEntity } from 'src/app/models/get/vechicle-master';

@Injectable({
  providedIn: 'root'
})
export class VechileMasterService extends BaseService<VechicleMasterEntity> {
  constructor(protected httpClient: HttpClient) {
    super(httpClient);
  }
  getResourceUrl(): string {
    return 'VechicleMasterEntity';
   }
}

