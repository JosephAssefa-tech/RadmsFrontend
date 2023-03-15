import { BaseService } from '../base-service/BaseService';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TerrainType } from 'src/app/models/get/terrain-type';

@Injectable({
  providedIn: 'root'
})
export class TerrianTypeService extends BaseService<TerrainType>  {

  constructor(protected httpClient: HttpClient) {
    super(httpClient);
  }
  getResourceUrl(): string {
    return 'TerrainType';
   }
}
