import { BaseService } from '../base-service/BaseService';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { RegionBasedSummaryData, SummaryCount } from 'src/app/models/get/SummaryCount';
import { SummaryData } from 'src/app/models/get/SummaryData';
import { RegionMaster } from 'src/app/models/post/region-master-model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegionsService extends BaseService<RegionMaster> {
  private deathCountSubject = new BehaviorSubject<number>(0);
  private seriousCountSubject = new BehaviorSubject<number>(0);
  private slightCountSubject = new BehaviorSubject<number>(0);
  private propertyDamageCountSubject = new BehaviorSubject<number>(0);

  deathCount$ = this.deathCountSubject.asObservable();
  seriousCount$ = this.seriousCountSubject.asObservable();
  slightCount$ = this.slightCountSubject.asObservable();
  propertyDamageCount$ = this.propertyDamageCountSubject.asObservable();


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
   updateCounts(deathCount: number, seriousCount: number, slightCount: number, propertyDamageCount: number) {
    this.deathCountSubject.next(deathCount);
    this.seriousCountSubject.next(seriousCount);
    this.slightCountSubject.next(slightCount);
    this.propertyDamageCountSubject.next(propertyDamageCount);
  }
}
