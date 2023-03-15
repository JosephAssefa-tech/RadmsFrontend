import { BaseService } from '../base-service/BaseService';
import { CollisionType } from 'src/app/models/get/collision-type';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CollisionTypeService extends BaseService<CollisionType> {

  constructor(protected httpClient: HttpClient) {
    super(httpClient);
  }
  getResourceUrl(): string {
    return 'CollisionType';
   }
}
