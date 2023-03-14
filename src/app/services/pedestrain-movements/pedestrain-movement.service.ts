import { BaseService } from '../base-service/BaseService';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PedestrianMovement } from 'src/app/models/get/pedestrian-movement';

@Injectable({
  providedIn: 'root'
})
export class PedestrainMovementService extends BaseService<PedestrianMovement> {

  constructor(protected httpClient: HttpClient)   {
    super(httpClient);
  }
  getResourceUrl(): string {
    return 'PedestrianMovement';
   }
}
