import { BaseService } from '../base-service/BaseService';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LicenceLevel } from 'src/app/models/get/licence-level';

@Injectable({
  providedIn: 'root'
})
export class LicenseLevelService extends BaseService<LicenceLevel> {

  constructor(protected httpClient: HttpClient)  {
    super(httpClient);
  }
  getResourceUrl(): string {
    return 'LicenceLevel';
   }
}


