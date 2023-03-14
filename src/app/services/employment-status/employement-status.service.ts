import { BaseService } from '../base-service/BaseService';
import { EmploymentStatus } from 'src/app/models/get/employment-status';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployementStatusService   extends BaseService<EmploymentStatus> {

  constructor(protected httpClient: HttpClient) {
    super(httpClient);
  }
  getResourceUrl(): string {
    return 'EmploymentStatus';
   }
}

