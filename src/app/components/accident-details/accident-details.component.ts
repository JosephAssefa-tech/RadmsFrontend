import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { AccidentCause } from 'src/app/models/get/accident-detail-model';
import { AccidentDetailServiceService } from 'src/app/services/accident-service/accident-detail-service.service';
import { AccidentDetailsTransactionService } from 'src/app/services/accident-details-transaction/accident-details-transaction.service';
import { AccidentType } from 'src/app/models/get/accident-type';
import { AccidentTypeService } from 'src/app/services/accident-types/accident-type.service';
import { AirConditionType } from 'src/app/models/get/air-condition';
import { AirconditionService } from 'src/app/services/air-condition/aircondition.service';
import { CityMaster } from 'src/app/models/get/city';
import { CityService } from 'src/app/services/city/city.service';
import { HighwayMaster } from 'src/app/models/get/highway-master';
import { HighwayMasterService } from 'src/app/services/highway-master/highway-master.service';
import { HighwayType } from 'src/app/models/get/highway-type';
import { HighwayTypeService } from 'src/app/services/highway-type/highway-type.service';
import { JunctionType } from 'src/app/models/get/junction-type';
import { JunctionTypeService } from 'src/app/services/junction-types/junction-type.service';
import { LandmarkType } from 'src/app/models/get/landmark-type';
import { LandmarkTypeService } from 'src/app/services/landmark-types/landmark-type.service';
import { LightCondition } from 'src/app/models/get/light-condition';
import { LightConditionService } from 'src/app/services/light-conditions/light-condition.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { PavementType } from 'src/app/models/get/pavement-type';
import { PavementTypeService } from 'src/app/services/pavement-type/pavement-type.service';
import { PoliceStation } from 'src/app/models/get/police-station';
import { PoliceStationService } from 'src/app/services/police-service/police-station.service';
import { RegionMaster } from 'src/app/models/post/region-master-model';
import { RegionsService } from 'src/app/services/region/regions.service';
import { RoadCarriageway } from 'src/app/models/get/road-carriageway';
import { RoadCarriagewayService } from 'src/app/services/road-carriageway/road-carriageway.service';
import { RoadSurfaceCondition } from 'src/app/models/get/road-surface-condition';
import { RoadSurfaceConditionsService } from 'src/app/services/road-surface-condition/road-surface-conditions.service';
import { Router } from '@angular/router';
import { SeverityLevel } from 'src/app/models/get/severity-level';
import { SeverityLevelService } from 'src/app/services/severity-level/severity-level.service';
import { SpeedLimit } from 'src/app/models/get/speed-limit';
import { SpeedLimitService } from 'src/app/services/speed-limit/speed-limit.service';
import { SubCityMaster } from 'src/app/models/get/subcity';
import { SubCityService } from 'src/app/services/sub-city/sub-city.service';
import { WeatherCondition } from 'src/app/models/get/weather-condition-model';
import { WeatherConditionService } from 'src/app/services/weather-condition/weather-condition.service';
import { WoredaMaster } from 'src/app/models/get/woreda';
import { WoredaMasterService } from 'src/app/services/woreda-service/woreda-master.service';
import { ZoneMaster } from 'src/app/models/get/zone';
import { ZoneMasterService } from 'src/app/services/zone-service/zone-master.service';

@Component({
  selector: 'app-accident-details',
  templateUrl: './accident-details.component.html',
  styleUrls: ['./accident-details.component.scss']
})
//create an angular car accident data management system?
export class AccidentDetailsComponent implements OnInit {
  myForm = new FormGroup({
    dateTime: new FormControl('',Validators.required),
    investigatorName: new FormControl('',Validators.required),
    policeRecordNumber: new FormControl('',Validators.required),
    policeStations: new FormControl(''),
    region: new FormControl('',Validators.required),
    zone: new FormControl('',Validators.required),
    woreda: new FormControl('',Validators.required),
    city: new FormControl('',Validators.required),
    subcity: new FormControl('',Validators.required),
    kebele: new FormControl('',Validators.required),
    accidentType: new FormControl('',Validators.required),
    weatherCondition: new FormControl('',Validators.required),
    accidentSeverity: new FormControl('',Validators.required),
    highwayName: new FormControl('',Validators.required),
    paymentType: new FormControl('',Validators.required),
    highwayType: new FormControl('',Validators.required),
    roadSurface: new FormControl('',Validators.required),
    roadType: new FormControl('',Validators.required),
    landMark: new FormControl('',Validators.required),
    carriageWay: new FormControl('',Validators.required),
    junctionType: new FormControl('',Validators.required),
    speedLimit: new FormControl('',Validators.required),
    lightCondition: new FormControl('',Validators.required),
    airCondition: new FormControl('',Validators.required),
    accidentCause: new FormControl('',Validators.required),
    locationName: new FormControl('',Validators.required),
    propertyDamage: new FormControl('',Validators.required),
    numberVechile: new FormControl('',Validators.required),
    numberVictim: new FormControl('',Validators.required),
  });


  plainFooter = 'plain extra footer';
  footerRender = (): string => 'extra footer';
  accidentDetail=[] as AccidentCause[];
  weatherCondition=[] as WeatherCondition[];
  policeStation=[] as PoliceStation[];
  subCityList=[] as SubCityMaster[];
  regionMaster=[] as RegionMaster[];
  zoneMaster=[] as  ZoneMaster[];
  woredaMaster=[] as WoredaMaster[];
  cityMaster=[] as CityMaster[];
  accidentType=[] as AccidentType[];
  accidentSeverity=[] as SeverityLevel[];
  highwayNames=[] as HighwayMaster[];
  highwayTypes=[] as HighwayType[];
  pavementTypes=[] as PavementType[];
  roadSurfaces=[] as RoadSurfaceCondition[];
  landMarkTypes=[] as LandmarkType[];
roadCarriagewayTypes=[] as RoadCarriageway[];
lightConditions=[] as LightCondition[];
airConditions=[] as AirConditionType[];
junctionTypes=[] as JunctionType[];
roadspeed=[] as SpeedLimit[];
accidentCauses=[] as AccidentCause[];




  selectedPoliceStation?:PoliceStation = undefined;
  selectedPoliceStationId:number = 0;

  selectedSubCity?:SubCityMaster = undefined;
  selectedSubCityId:number = 0;
  selectedAccidentSeverity:any;
  selectedhighwayName:any;
  selectedhighwayType:any;
  selectedpaymentType:any;
  selectedroadSurface:any;
  selectedroadType:any;
  selectedlandMark:any;
  selectedcarriageWay:any;
  selectedjunctionType:any;
  selectedspeedLimit:any;
  selectedlightCondition:any;
  selectedairCondition:any;
  selectedaccidentCause:any;
  selectedWeather:any;
  selectedAccident:any;
  selectedCity:any;
  selectedWored:any;
  selectedZone:any;


  selectedRegion?:RegionMaster=undefined;
  selectedRegionId:number=0;
  investigator?: string;
  policeRecordNumber?: string;
  propertyDamage?:string;
  numberOfVechile?:string;
  numberOfVictim?:string;
  kebeleName?:string;
  locationLocalName?:string;
  value?: string;
   form:FormGroup;

  constructor(private subCityService:SubCityService,
    private policeStationService:PoliceStationService,
    private accidentService:AccidentDetailServiceService,
    private accidentDetailTransactionService:AccidentDetailsTransactionService,
    private regionService:RegionsService,
    private zoneService:ZoneMasterService,
    private woredaService:WoredaMasterService,
    private cityMasterService:CityService,
    private accidentTypeService:AccidentTypeService,
    private accidentSeverityService:SeverityLevelService,
    private highwayService:HighwayMasterService,
    private highwayTypesService:HighwayTypeService,
    private pavementService:PavementTypeService,
    private roadSurfaceService:RoadSurfaceConditionsService,
    private landMarkTypeService:LandmarkTypeService,
    private roadCarriwageService:RoadCarriagewayService,
    private ligtConditionService:LightConditionService,
    private airConditionService:AirconditionService,
    private junctionTypeService:JunctionTypeService,
    private roadSpeedService:SpeedLimitService,
    private accidentCauseServices:AccidentDetailServiceService,
    private route:Router,
    private weatherService:WeatherConditionService,
    private notification:NzNotificationService,
    public fb:FormBuilder

    ) {
this.form=this.fb.group({
  dateTime:['']}
  );


    }
    isFormValid(): boolean {
      return this.myForm.valid;
    }

  ngOnInit(): void {
this.GetAccidentDetail();
this.GetWeatherCondition();
this.GetPoliceStatioin();
this.GetSubCityMaster();
this.GetRegionMaster()
this.GetZoneMaster();
this.GetWoredaMaster();
this.GetCityMaster();
this.GetAccidentType();
this.GetAccidentSeverity();
this.GetHighwayNames();
this.GetHighwayTypes();
this.GetPavementTypes();
this.GetRoadSurfaces();
this.GetLandmarkTypes();
this.GetRoadCarriageTypes();
this.GetLightCondition();
this.GetAirConditiion();
this.GetJunctionTypes();
this.GetRoadSpeeds();
this.GetAccidentCauses();


  }
  sucessNotification(type:string):void{
    this.notification.success("Data Saved Successfully","",{nzPlacement:'topRight'});
  }
  errorNotification(type:string):void{
    this.notification.error("Data was not Saved",'',{nzPlacement:'topRight'})
  }

  OnPoliceStationSelected()
  {

    this.selectedSubCity=this.selectedPoliceStation?.subCity ;
    this.selectedSubCityId=this.selectedSubCity?.subCityId??0;
    console.log(this.selectedSubCity);

  }
  GetRegionMaster()
  {
    this.regionService.getAll().subscribe((response)=>{
      this.regionMaster=response;
    })
  }
  GetZoneMaster()
  {
    this.zoneService.getAll().subscribe((response)=>{
      this.zoneMaster=response;
    })
  }
  GetWoredaMaster()
  {
    this.woredaService.getAll().subscribe((response)=>{
      this.woredaMaster=response;
    })
  }
  GetCityMaster()
  {
    this.cityMasterService.getAll().subscribe((response)=>{
      this.cityMaster=response;
    })
  }
  GetAccidentDetail()
  {
    this.accidentService.getAll().subscribe((response:AccidentCause[])=>{
      this.accidentDetail=response;
    });
  }
  GetAccidentType()
  {
    this.accidentTypeService.getAll().subscribe((response:AccidentType[])=>{
      this.accidentType=response;
    });
  }
  GetLandmarkTypes()
  {
    this.landMarkTypeService.getAll().subscribe((response)=>{
      this.landMarkTypes=response;
    })
  }
  GetRoadCarriageTypes()
  {
    this.roadCarriwageService.getAll().subscribe((response)=>{
      this.roadCarriagewayTypes=response;
    })
  }
  GetAccidentSeverity()
  {
    this.accidentSeverityService.getAll().subscribe((response)=>{
      this.accidentSeverity=response;
    })
  }
  GetHighwayNames()
  {
    this.highwayService.getAll().subscribe((resposne)=>{
      this.highwayNames=resposne;
    })
  }
  GetHighwayTypes()
  {
    this.highwayTypesService.getAll().subscribe((response)=>{
      this.highwayTypes=response;
    })

  }
  GetPavementTypes()
  {
    this.pavementService.getAll().subscribe((response)=>{
      this.pavementTypes=response;
    })
  }
  GetRoadSurfaces()
  {
    this.roadSurfaceService.getAll().subscribe((response)=>{
      this.roadSurfaces=response;
    })
  }
  GetLightCondition(){
    this.ligtConditionService.getAll().subscribe((response)=>{
      this.lightConditions=response;
    })

  }
GetAirConditiion(){
  this.airConditionService.getAll().subscribe((response)=>{
    this.airConditions=response;
  })

}
GetJunctionTypes(){
  this.junctionTypeService.getAll().subscribe((response)=>{
    this.junctionTypes=response;
  })

}
GetRoadSpeeds(){
  this.roadSpeedService.getAll().subscribe((response)=>{
    this.roadspeed=response;
  })

}
GetAccidentCauses()
{
  this.accidentCauseServices.getAll().subscribe((response)=>{
    this.accidentCauses=response;
  })
}
  GetWeatherCondition()
  {
    this.weatherService.getAll().subscribe((response:WeatherCondition[])=>{
      this.weatherCondition=response;
    })

  }
  GetPoliceStatioin()
  {
    this.policeStationService.getAll()
    .subscribe((response:PoliceStation[])=>{

      this.policeStation=response;

    });
  }
  GetSubCityMaster()
  {
    this.subCityService.getAll().subscribe((response)=>{
      this.subCityList=response;
    })

  }

  WelcomePage()
  {
    this.errorNotification('error');
    this.route.navigate(['/welcome']);

  }

  RoadInvolvedPage(){
    this.route.navigate(['/roadInvolved']);

  }
  // submitForm()
  // {
  //  var formData:any=new FormData();
  //  formData.append("dateTime",this.form.get('dateTime').value);

 //// }
 onSubmit(){
  console.log("submitting a form")
  this.accidentDetailTransactionService.post(this.myForm.value).subscribe(response => {
    console.log(response);
  });
  console.log("submitting a form")
 }


}
