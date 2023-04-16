import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from '../base-service/BaseService';
import { VictimDetailsTransaction } from 'src/app/models/get/victim-details-transaction';

@Injectable({
  providedIn: 'root'
})
export class VictimDetailService extends BaseService<VictimDetailsTransaction>{

  constructor(protected httpClient: HttpClient)  {
    super(httpClient);
  }
  getResourceUrl(): string {
    return 'VictimDetailsTransaction';
   }
}
