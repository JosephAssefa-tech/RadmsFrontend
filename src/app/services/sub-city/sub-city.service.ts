import { BaseService } from '../base-service/BaseService';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SubCityMaster } from 'src/app/models/get/subcity';
import { Observable, of } from 'rxjs';
import { CityMaster } from 'src/app/models/get/city';

@Injectable({
  providedIn: 'root'
})
export class SubCityService extends BaseService<SubCityMaster>{

  constructor(protected httpClient: HttpClient) {
    super(httpClient);
  }
  getResourceUrl(): string {
    return 'SubCityMaster';
   }
   override getAll(): Observable<SubCityMaster[]> {
       return of ([
        {
          subCityId: 2,
          subCityName: "Arada Sub City",
          city: null
        },
        {
          subCityId: 3,
          subCityName: "Nifas City",
          city: null
        }
       ])
   }
}
