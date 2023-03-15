import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ZoneMaster } from 'src/app/models/get/zone';
import { BaseService } from '../base-service/BaseService';

@Injectable({
  providedIn: 'root'
})
export class ZoneMasterService extends BaseService<ZoneMaster> {

  constructor(protected httpClient: HttpClient) {
    super(httpClient);
  }
  getResourceUrl(): string {
    return 'zoneMaster';
   }
   override getAll(): Observable<ZoneMaster[]> {
       return of ([
        {
          zoneId: 1,
  zoneName: "zone A"
        },
        {
          zoneId: 2,
          zoneName: "zone B"
        }
       ])
   }
}
