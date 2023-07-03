import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { ZoneMaster } from 'src/app/models/get/zone';
import { BaseService } from '../base-service/BaseService';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ZoneMasterService extends BaseService<ZoneMaster> {
  private zonesSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  private selectedZoneRowData$ = new BehaviorSubject<any>(null);
  public zones$ = this.zonesSubject.asObservable();

  listOfZones=`${environment.apiUrl}ZoneMaster`;

  constructor(protected httpClient: HttpClient) {
    super(httpClient);
  }
  getResourceUrl(): string {
    return 'ZoneMaster';
   }
   getZonesListByLanguage(language: string, selectedRegionId?: number): Observable<any[]> {
    const params: { [key: string]: string | number } = { language: language };
  
    // If selectedRegionId is provided, add it to the params
    if (selectedRegionId) {
      params['regionId'] = selectedRegionId;
    }
    console.log("selectedRegionId");
  console.log(selectedRegionId);
    this.httpClient.get<any[]>(this.listOfZones, { params: params })
      .subscribe(zones => {
        this.zonesSubject.next(zones); // Update the zones data in the BehaviorSubject
      });
  
    return this.zonesSubject.asObservable(); // Return the Observable of the BehaviorSubject
  }
  
  
  
  updateSelectedZoneRowData(data: any): void {
    this.selectedZoneRowData$.next(data);
  }

  getSelectedZoneRowData(): BehaviorSubject<any> {
    return this.selectedZoneRowData$;
  }
}
