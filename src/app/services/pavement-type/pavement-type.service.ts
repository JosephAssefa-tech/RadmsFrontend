import { BaseService } from '../base-service/BaseService';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PavementType } from 'src/app/models/get/pavement-type';

@Injectable({
  providedIn: 'root'
})
export class PavementTypeService extends BaseService<PavementType> {

  constructor(protected httpClient: HttpClient)   {
    super(httpClient);
  }
  getResourceUrl(): string {
    return 'PavementType';
   }
}
