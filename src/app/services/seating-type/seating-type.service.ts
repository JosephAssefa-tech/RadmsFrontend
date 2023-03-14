import { BaseService } from '../base-service/BaseService';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SeatingType } from 'src/app/models/get/seating-type';

@Injectable({
  providedIn: 'root'
})
export class SeatingTypeService extends BaseService<SeatingType> {

  constructor(protected httpClient: HttpClient) {
    super(httpClient);
  }
  getResourceUrl(): string {
    return 'SeatingType';
   }
}

