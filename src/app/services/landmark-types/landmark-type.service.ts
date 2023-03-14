import { BaseService } from '../base-service/BaseService';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LandmarkType } from 'src/app/models/get/landmark-type';

@Injectable({
  providedIn: 'root'
})
export class LandmarkTypeService  extends BaseService<LandmarkType>{


  constructor(protected httpClient: HttpClient)  {
    super(httpClient);
  }
  getResourceUrl(): string {
    return 'LandmarkType';
   }
}

