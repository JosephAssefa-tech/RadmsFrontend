import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { WoredaMaster } from 'src/app/models/get/woreda';
import { BaseService } from '../base-service/BaseService';

@Injectable({
  providedIn: 'root'
})
export class WoredaMasterService extends BaseService<WoredaMaster> {

  constructor(protected httpClient: HttpClient) {
    super(httpClient);
  }
  getResourceUrl(): string {
    return 'WoredaMaster';
   }
}
