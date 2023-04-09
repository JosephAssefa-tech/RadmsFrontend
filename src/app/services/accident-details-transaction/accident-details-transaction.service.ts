import { AccidentDetailsTransaction } from 'src/app/models/get/accident-details-transaction';
import { BaseService } from '../base-service/BaseService';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccidentDetailsTransactionService extends BaseService<AccidentDetailsTransaction> {
  private newRecordId = new BehaviorSubject<any>(null);
  accidentDetailGlobalId:number | undefined;
  constructor(protected httpClient: HttpClient) {
    super(httpClient);
  }
  getResourceUrl(): string {
    return 'AccidentDetailsTransaction';
   }
   setNewRecordId(id: number) {
    this.newRecordId.next(id);
  }

  getNewRecordId() {
    return this.newRecordId.asObservable();
  }
}
