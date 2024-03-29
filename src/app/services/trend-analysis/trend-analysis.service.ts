import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SummaryData } from 'src/app/models/get/SummaryData';
import { environment } from 'src/environments/environment';
import { BaseService } from '../base-service/BaseService';
import { RegionBasedSummaryData } from 'src/app/models/get/SummaryCount';
import { Observable } from 'rxjs';
import { TrendAnalysisResponse } from 'src/app/models/get/TrendAnalysisResponse';


@Injectable({
  providedIn: 'root'
})
export class TrendAnalysisService extends  BaseService<RegionBasedSummaryData>{
  summaryData=`${environment.apiUrl}VictimDetailsTransaction/grouped-data`;
  trendAnalysisData=`${environment.apiUrl}VictimDetailsTransaction/trend-analysis-data`;

  constructor(protected httpClient: HttpClient)  {
    super(httpClient);
  }
  getResourceUrl(): string {
    return 'VictimDetailsTransaction';
   }
   getGroupedData():Observable<any[]>
   {
    return this.httpClient.get<any[]>(this.summaryData);
   }
   getTrendAnalysisdData(): Observable<TrendAnalysisResponse[]>
   {
    return this.httpClient.get<TrendAnalysisResponse[]>(this.trendAnalysisData);
   }
}
