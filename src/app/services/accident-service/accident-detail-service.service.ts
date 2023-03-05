import { AccidentCause } from 'src/app/models/get/accident-detail-model';
import { BaseService } from '../base-service/BaseService';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccidentDetailServiceService extends BaseService<AccidentCause>  {


  constructor(protected httpClient: HttpClient) {
    super(httpClient);
  }
  getResourceUrl(): string {
    return 'AccidentCause';
   }
}
