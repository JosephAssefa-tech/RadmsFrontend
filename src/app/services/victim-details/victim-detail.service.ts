import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from '../base-service/BaseService';
import { VictimDetailsTransaction } from 'src/app/models/get/victim-details-transaction';
import { SummaryCount } from 'src/app/models/get/SummaryCount';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VictimDetailService extends BaseService<VictimDetailsTransaction>{
  totalAccidentCountEndPoint=`${environment.apiUrl}VictimDetailsTransaction/grouped-data`;
  constructor(protected httpClient: HttpClient)  {
    super(httpClient);
  }
  getResourceUrl(): string {
    return 'VictimDetailsTransaction';
   }
   getGroupedData()
   {
    return this.httpClient.get<SummaryCount[]>(this.totalAccidentCountEndPoint);
   }
}
