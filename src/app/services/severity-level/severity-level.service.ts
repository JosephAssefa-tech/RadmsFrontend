import { BaseService } from '../base-service/BaseService';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SeverityLevel } from 'src/app/models/get/severity-level';

@Injectable({
  providedIn: 'root'
})
export class SeverityLevelService extends BaseService<SeverityLevel> {

  constructor(protected httpClient: HttpClient) {
    super(httpClient);
  }
  getResourceUrl(): string {
    return 'SeverityLevel';
   }
}
