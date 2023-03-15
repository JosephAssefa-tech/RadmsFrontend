import { Injectable } from '@angular/core';
import { VictimTypeLookup } from 'src/app/models/get/victim-type-lookup';
import { BaseService } from '../base-service/BaseService';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VictimTypeService extends BaseService<VictimTypeLookup> {

  constructor(protected httpClient: HttpClient)  {
    super(httpClient);
  }
  getResourceUrl(): string {
    return 'VictimTypeLookup';
   }
}
