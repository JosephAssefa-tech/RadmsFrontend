import * as L from 'leaflet';
// import * as Highcharts from 'highcharts';
// import HC_exporting from 'highcharts/modules/exporting';
// import HC_exportData from 'highcharts/modules/export-data';
//import { Chart } from 'angular-highcharts';
//import { Chart } from 'highcharts';
import { AfterViewInit, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { latLng, tileLayer, marker } from 'leaflet';
import { MapService } from 'src/app/services/map-services/map.service';
import { Router } from '@angular/router';
import { AccidentDetailsTransactionService } from 'src/app/services/accident-details-transaction/accident-details-transaction.service';
import { VictimDetailService } from 'src/app/services/victim-details/victim-detail.service';
import { SummaryData } from 'src/app/models/get/SummaryData';
import { Pipe, PipeTransform } from '@angular/core';
import { BlackSpotService } from 'src/app/services/black-spot/black-spot.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit,AfterViewInit  {
  center = latLng(11.1, 12.1);
  zoom = 10;

  // Define the options for the map
  options = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
      })
    ],
    zoom: this.zoom,
    center: this.center
  };

  // Initialize the layers for the markers
  layers = [];
  //chart: Chart;
  private mapp: L.Map;
  totalAccidentCount:number | undefined;
  severityData : SummaryData[];
  blackSpots: any[];

  constructor(private blackSpotService: BlackSpotService,private accidentDetailTransactionService:AccidentDetailsTransactionService,private victimDetailService:VictimDetailService
   , private mapServicee:MapService,private route:Router) {


  }
  ngAfterViewInit(): void {
   // this.mapp = this.mapServicee.createMap();
  }
  ngOnInit(): void {
    this.blackSpotService.getBlackSpots().subscribe(data=>{

      this.blackSpots = data;

      const map = L.map('mapid').setView([8.9733, 38.7930], 8);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
      }).addTo(map);

      for (const blackSpot of this.blackSpots) {
        const lat = blackSpot.blackSpotLat;
        const long = blackSpot.blackSpotLong;

        const marker = L.marker([lat, long], {
          icon: L.icon({
            iconUrl: 'https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png',
            iconSize: [30, 35],
            iconAnchor: [22, 94],
            popupAnchor: [-3, -76]
          })
        }).addTo(map);

        marker.bindPopup(`Lat: ${lat}, Long: ${long}`);
      }
    });


  this.GetSeverity();

  this.GetTotalAccidentCount();
  }
  GetSeverity()
  {
    this.victimDetailService.getGroupedData().subscribe(data=>{
      this.severityData  = data;

    })
  }
  getSeverityByType(type: number): any {
    return this.severityData.find(item => item.severityId === type);
  }
  GetTotalAccidentCount()
  {
    this.accidentDetailTransactionService.getTotalAccidentCount().subscribe(result => {
      this.totalAccidentCount = result.totalAccidentCount;
      console.log(this.totalAccidentCount);

    });
  }
  AdvancedSearchPage()
  {
    this.route.navigate(['/advanceSearch']);

  }


}
