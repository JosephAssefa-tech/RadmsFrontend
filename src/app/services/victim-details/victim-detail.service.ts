import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from '../base-service/BaseService';
import { VictimDetailsTransaction } from 'src/app/models/get/victim-details-transaction';
import { SummaryCount } from 'src/app/models/get/SummaryCount';
import { environment } from 'src/environments/environment';
import { SummaryData } from 'src/app/models/get/SummaryData';

@Injectable({
  providedIn: 'root'
})
export class VictimDetailService extends BaseService<VictimDetailsTransaction>{
  summaryData=`${environment.apiUrl}VictimDetailsTransaction/grouped-data`;


  constructor(protected httpClient: HttpClient)  {
    super(httpClient);
  }
  getResourceUrl(): string {
    return 'VictimDetailsTransaction';
   }
   getGroupedData(startDate?: Date, endDate?: Date)
   {
      // Create HTTP params with the start and end date values
      let params = new HttpParams();
      if (startDate) {
        params = params.set('startDate', startDate.toISOString()); // Convert Date to ISO string format
      }
      if (endDate) {
        params = params.set('endDate', endDate.toISOString());
      }
      
      return this.httpClient.get<SummaryData[]>(this.summaryData, { params });
   }

}
