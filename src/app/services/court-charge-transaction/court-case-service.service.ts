import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CourtCaseTransaction } from 'src/app/models/get/court-case-transaction';
import { BaseService } from '../base-service/BaseService';

@Injectable({
  providedIn: 'root'
})
export class CourtCaseServiceService extends BaseService<CourtCaseTransaction> {

  constructor(protected httpClient: HttpClient)  {
    super(httpClient);
  }
  getResourceUrl(): string {
    return 'CourtCaseTransaction';
   }
}