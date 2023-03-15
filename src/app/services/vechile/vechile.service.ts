import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { VechicleMasterEntity } from 'src/app/models/get/vechicle-master';
import { BaseService } from '../base-service/BaseService';

@Injectable({
  providedIn: 'root'
})
export class VechileService extends BaseService<VechicleMasterEntity> {

  constructor(protected httpClient: HttpClient) {
    super(httpClient);
  }
  getResourceUrl(): string {
    return 'VechicleMasterEntity';
   }
}
