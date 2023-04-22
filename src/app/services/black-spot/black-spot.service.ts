import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BlackSpot } from 'src/app/models/get/BlackSpot';
import { environment } from 'src/environments/environment';
import { BaseService } from '../base-service/BaseService';
@Injectable({
  providedIn: 'root'
})
export class BlackSpotService  {
  // getResourceUrl(): string {
  //   throw new Error('BlackSpot');
  // }
  blackSpotEndPoint=`${environment.apiUrl}BlackSpot`;

  constructor(private http: HttpClient) {

  }

  getBlackSpots(): Observable<BlackSpot[]> {
    console.log("Seee")
    return this.http.get<BlackSpot[]>(this.blackSpotEndPoint);
  }
}
