import * as L from 'leaflet';

import { AfterViewInit, Component, Input, OnDestroy, OnInit } from '@angular/core';

import { MapService } from 'src/app/services/map-services/map.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit,AfterViewInit  {
  private mapp: L.Map;

  constructor(private mapServicee:MapService,private route:Router) {

  }
  ngAfterViewInit(): void {
   // this.mapp = this.mapServicee.createMap();
  }
  ngOnInit(): void {
  //  this.mapp = this.mapServicee.createMap();
  }


  AdvancedSearchPage()
  {
    this.route.navigate(['/advanceSearch']);

  }


}
