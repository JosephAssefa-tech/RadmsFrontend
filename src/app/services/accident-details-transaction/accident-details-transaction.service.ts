import { AccidentDetailsTransaction } from 'src/app/models/get/accident-details-transaction';
import { BaseService } from '../base-service/BaseService';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccidentDetailsTransactionService extends BaseService<AccidentDetailsTransaction> {

  constructor(protected httpClient: HttpClient) {
    super(httpClient);
  }
  getResourceUrl(): string {
    return 'AccidentDetailsTransaction';
   }
}
