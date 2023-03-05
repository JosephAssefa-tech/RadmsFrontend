import { Component, OnInit } from '@angular/core';

import { AccidentCause } from 'src/app/models/get/accident-detail-model';
import { AccidentDetailServiceService } from 'src/app/services/accident-service/accident-detail-service.service';
import { Router } from '@angular/router';
import { WeatherCondition } from 'src/app/models/get/weather-condition-model';
import { WeatherConditionService } from 'src/app/services/weather-condition/weather-condition.service';

@Component({
  selector: 'app-accident-details',
  templateUrl: './accident-details.component.html',
  styleUrls: ['./accident-details.component.scss']
})
//create an angular car accident data management system?
export class AccidentDetailsComponent implements OnInit {
  accidentDetail=[] as AccidentCause[];
  weatherCondition=[] as WeatherCondition[];
  selectedValue = '';
  value?: string;
  constructor(private accidentService:AccidentDetailServiceService,private route:Router,
    private weatherService:WeatherConditionService) { }

  ngOnInit(): void {
    console.log("start");
this.GetAccidentDetail();
this.GetWeatherCondition();
  }
  GetAccidentDetail()
  {
    this.accidentService.getAll().subscribe((response:AccidentCause[])=>{
      this.accidentDetail=response;
    });
  }
  GetWeatherCondition()
  {
    this.weatherService.getAll().subscribe((response:WeatherCondition[])=>{
      this.weatherCondition=response;
    })


  }

  WelcomePage()
  {
    this.route.navigate(['/welcome']);

  }

}
