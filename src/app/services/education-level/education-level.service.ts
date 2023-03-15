import { BaseService } from '../base-service/BaseService';
import { EducationLevel } from 'src/app/models/get/education-level';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EducationLevelService extends BaseService<EducationLevel>  {

  constructor(protected httpClient: HttpClient) {
    super(httpClient);
  }
  getResourceUrl(): string {
    return 'EducationLevel';
   }
}
