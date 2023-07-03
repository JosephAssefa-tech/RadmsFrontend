import { AccidentDetailsTransaction } from 'src/app/models/get/accident-details-transaction';
import { BaseService } from '../base-service/BaseService';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccidentDetailsTransactionService extends BaseService<AccidentDetailsTransaction> {
  totalAccidentCountEndPoint=`${environment.apiUrl}AccidentDetailsTransaction/count`;
  totalPropertyDamageEndPoint=`${environment.apiUrl}AccidentDetailsTransaction/dashboard-property-damage`;
  getAccidentListsForCourtCaseEndPoint=`${environment.apiUrl}AccidentDetailsTransaction/get-accident-lists-for`;
  

  private accidentDetailsSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  public accidentDetails$ = this.accidentDetailsSubject.asObservable();

  private selectedAirConditionRowData$ = new BehaviorSubject<any>(null);



  
  
  number: any;
  NoumberOfRoads:any;


  private numberSource = new BehaviorSubject<number>(1);
  number$ = this.numberSource.asObservable();

  private newRecordId = new BehaviorSubject<any>(null);
  accidentDetailGlobalId:number | undefined;
  constructor(protected httpClient: HttpClient) {
    super(httpClient);
  }
  getResourceUrl(): string {
    return 'AccidentDetailsTransaction';
   }
   setNewRecordId(id: number) {
    this.newRecordId.next(id);
  }

  getNewRecordId() {
    return this.newRecordId.asObservable();
  }
  updateNumberOfForms(number: number) {
    this.numberSource.next(number);
  }
  // getTotalAccidentCount()
  // {
  //   return this.httpClient.get<{ totalAccidentCount: number }>(this.totalAccidentCountEndPoint);

  // }
  getTotalAccidentCount(startDate?: Date, endDate?: Date) {
    let params = new HttpParams();
  
    if (startDate) {
      params = params.set('startDate', startDate.toISOString());
    }
  
    if (endDate) {
      params = params.set('endDate', endDate.toISOString());
    }

    return this.httpClient.get<{ totalAccidentCount: number }>(this.totalAccidentCountEndPoint, { params });
  }
  
  // getTotalPropertyDamageCount()
  // {
  //   return this.httpClient.get<{ totalPropertyDamage: number }>(this.totalPropertyDamageEndPoint);
  // }
  getTotalPropertyDamageCount(startDate?: Date, endDate?: Date) {
    let params = new HttpParams();
  
    if (startDate) {
      params = params.set('startDate', startDate.toISOString());
    }
  
    if (endDate) {
      params = params.set('endDate', endDate.toISOString());
    }
  
    return this.httpClient.get<{ dashboardTotalPropertyDamage: number }>(this.totalPropertyDamageEndPoint,{ params });
  }
  getAirConditionsListByLanguage(language: string, page: number, pageSize: number, regionId?: number): Observable<any> {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('pageSize', pageSize.toString());
  
    if (regionId) {
      params = params.set('regionId', regionId);
    }
  
    return this.httpClient.get<any>(`${environment.apiUrl}AccidentDetailsTransaction/get-accident-lists-for`, { params });
  }
  
}
