import { BaseService } from '../base-service/BaseService';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegionBasedSummaryData, SummaryCount } from 'src/app/models/get/SummaryCount';
import { SummaryData } from 'src/app/models/get/SummaryData';
import { RegionMaster } from 'src/app/models/post/region-master-model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegionsService extends BaseService<RegionMaster> {

  totalVictimEndPoint=`${environment.apiUrl}VictimDetailsTransaction/grouped-region-data?`;
  constructor(protected httpClient: HttpClient) {
    super(httpClient);
  }

  getResourceUrl(): string {
    return 'RegionMaster';
   }
   getDataByRegion(regionId: number):Observable<any>
   {


    let params = { regionId };
    return this.httpClient.get<any>(this.totalVictimEndPoint, { params: { regionId } });
   }
}
