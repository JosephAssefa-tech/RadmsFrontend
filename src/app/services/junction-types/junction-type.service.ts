import { BaseService } from '../base-service/BaseService';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JunctionType } from 'src/app/models/get/junction-type';

@Injectable({
  providedIn: 'root'
})
export class JunctionTypeService extends BaseService<JunctionType> {

  constructor(protected httpClient: HttpClient)  {
    super(httpClient);
  }
  getResourceUrl(): string {
    return 'JunctionType';
   }
}
