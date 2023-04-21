import * as L from 'leaflet';

import { AfterViewInit, Component, Input, OnDestroy, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
import HC_exportData from 'highcharts/modules/export-data';
import { Chart } from 'angular-highcharts';
import { MapService } from 'src/app/services/map-services/map.service';
import { Router } from '@angular/router';
import { AccidentDetailsTransactionService } from 'src/app/services/accident-details-transaction/accident-details-transaction.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit,AfterViewInit  {
  chart: Chart;
  private mapp: L.Map;
  count:number | undefined;

  constructor(private accidentDetailTransactionService:AccidentDetailsTransactionService,
    private mapServicee:MapService,private route:Router) {
      HC_exporting(Highcharts);
      HC_exportData(Highcharts);
      this.chart = new Chart({
        chart: {
          type: 'column',
        },
        title: {
          text: 'Example Chart',
        },
        xAxis: {
          categories: ['Category 1', 'Category 2', 'Category 3'],
        },
        yAxis: {
          title: {
            text: 'Value',
          },
        },
        series: [
          {
            name: 'Series 1',
            data: [1, 2, 3],
          },
          {
            name: 'Series 2',
            data: [4, 5, 6],
          },
        ],
      });

  }
  ngAfterViewInit(): void {
   // this.mapp = this.mapServicee.createMap();
  }
  ngOnInit(): void {
  this.GetTotalAccidentCount();
  }

  GetTotalAccidentCount()
  {
    this.accidentDetailTransactionService.getTotalAccidentCount().subscribe(result => {
      this.count = result.totalAccidentCount;
      console.log("counttting")
      console.log(this.count);
      console.log("counttting")
    });
  }
  AdvancedSearchPage()
  {
    this.route.navigate(['/advanceSearch']);

  }


}
