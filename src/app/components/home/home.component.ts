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
import Chart from 'chart.js/auto';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RegionMaster } from 'src/app/models/get/region';
import { RegionsService } from 'src/app/services/region/regions.service';
import { RegionBasedSummaryData } from 'src/app/models/get/SummaryCount';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit,AfterViewInit  {
  myForm = new FormGroup({
    regionId:new FormControl('',Validators.required),
  });
  regionIdd: number;
  data: RegionBasedSummaryData;
  deathCount = 0;
  seriousCount=0;
  slightCount=0;
  propertyDamageCount=0;




  regionMasters=[] as RegionMaster[];
  center = latLng(11.1, 12.1);
  zoom = 10;
  public chart: any;
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
  dateAndTime:any;
  totalAccidentCount:number | undefined;
  totalPropertyDamage:number | undefined;
  totalBlackspotCount:number | undefined;
  severityData : SummaryData[];
  blackSpots: any[];

  constructor( private regionService:RegionsService,private blackSpotService: BlackSpotService,private accidentDetailTransactionService:AccidentDetailsTransactionService,private victimDetailService:VictimDetailService
   , private mapServicee:MapService,private route:Router) {


  }
  ngAfterViewInit(): void {
   // this.mapp = this.mapServicee.createMap();
  }
  ngOnInit(): void {
    this.GetRegionMaster();
    this.createChart();
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
  this.getTotalBlackspotCount();
  this.GetTotalAccidentCount();
  this.GettotalPropertyDamageCount();

  }
  createChart(){

    this.chart = new Chart("MyChart", {
      type: 'line', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['2022-05-10', '2022-05-11', '2022-05-12','2022-05-13',
								 '2022-05-14', '2022-05-15', '2022-05-16','2022-05-17', ],
	       datasets: [
          {

            data: ['467','576', '572', '79', '92',
								 '574', '573', '576'],

          },
          {

            data: ['542', '542', '536', '327', '17',
									 '0.00', '538', '541'],

          },
          {

            data: ['580', '580', '596', '387', '67',
									 '10.00', '738', '641'],

          },
          {

            data: ['542', '542', '536', '327', '17',
									 '32.00', '888', '781'],

          }
        ]
      },
      options: {
        aspectRatio:2
      }

    });
  }
  GetRegionMaster()
  {
    this.regionService.getAll().subscribe((response)=>{
      this.regionMasters=response;
    })
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


    });
  }
  GettotalPropertyDamageCount()
  {
    this.accidentDetailTransactionService.getTotalPropertyDamageCount().subscribe(result => {
      this.totalPropertyDamage = result.totalPropertyDamage;


    });

  }
  getTotalBlackspotCount()
  {
    this.blackSpotService.getTotalBlackspotCount().subscribe(result => {
      this.totalBlackspotCount = result.blackspotCount;


    });
  }
  getRegionBasedSummaryData(regionId:number)
  {


    this.regionService.getDataByRegion(regionId)
    .subscribe(data => {
this.data=data;
this.deathCount = data.find((item: RegionBasedSummaryData) => item.severityType === 'Death').count;
this.seriousCount = data.find((item: RegionBasedSummaryData) => item.severityType === 'Serious Injury').count;
this.slightCount = data.find((item: RegionBasedSummaryData) => item.severityType === 'Slight Injury').count;
this.propertyDamageCount = data.find((item: RegionBasedSummaryData) => item.severityType === 'Property Damage').count;



    },
    error => {
      console.log('Error sending filter request: ', error);
    });

  }
  AdvancedSearchPage()
  {
    this.route.navigate(['/advanceSearch']);

  }



}
