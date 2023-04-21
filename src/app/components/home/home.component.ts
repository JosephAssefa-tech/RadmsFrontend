import * as L from 'leaflet';
// import * as Highcharts from 'highcharts';
// import HC_exporting from 'highcharts/modules/exporting';
// import HC_exportData from 'highcharts/modules/export-data';
//import { Chart } from 'angular-highcharts';
//import { Chart } from 'highcharts';
import { AfterViewInit, Component, Input, OnDestroy, OnInit } from '@angular/core';

import { MapService } from 'src/app/services/map-services/map.service';
import { Router } from '@angular/router';
import { AccidentDetailsTransactionService } from 'src/app/services/accident-details-transaction/accident-details-transaction.service';
import { VictimDetailService } from 'src/app/services/victim-details/victim-detail.service';
import { SummaryData } from 'src/app/models/get/SummaryData';
import { Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit,AfterViewInit  {

  //chart: Chart;
  private mapp: L.Map;
  totalAccidentCount:number | undefined;
  severityData : SummaryData[];


  constructor(private accidentDetailTransactionService:AccidentDetailsTransactionService,private victimDetailService:VictimDetailService
   , private mapServicee:MapService,private route:Router) {


  }
  ngAfterViewInit(): void {
   // this.mapp = this.mapServicee.createMap();
  }
  ngOnInit(): void {
    this.victimDetailService.getGroupedData().subscribe(data=>{
      this.severityData  = data;

    })
  this.GetTotalAccidentCount();
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
