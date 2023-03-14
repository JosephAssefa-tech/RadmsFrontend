import { BaseService } from '../base-service/BaseService';
import { HttpClient } from '@angular/common/http';
import { ImpactType } from 'src/app/models/get/impact-type';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImpactTypeService extends BaseService<ImpactType> {

  constructor(protected httpClient: HttpClient)  {
    super(httpClient);
  }
  getResourceUrl(): string {
    return 'ImpactType';
   }
}

