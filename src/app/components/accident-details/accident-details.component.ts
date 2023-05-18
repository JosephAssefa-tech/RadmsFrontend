import {  Validators } from '@angular/forms';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AccidentCause } from 'src/app/models/get/accident-detail-model';
import { AccidentDetailServiceService } from 'src/app/services/accident-service/accident-detail-service.service';
import { AccidentDetailsTransactionService } from 'src/app/services/accident-details-transaction/accident-details-transaction.service';
import { AccidentType } from 'src/app/models/get/accident-type';
import { AccidentTypeService } from 'src/app/services/accident-types/accident-type.service';
import { AirConditionType } from 'src/app/models/get/air-condition';
import { AirconditionService } from 'src/app/services/air-condition/aircondition.service';
import { CityMaster } from 'src/app/models/get/city';
import { CityService } from 'src/app/services/city/city.service';
import { CollisionType } from 'src/app/models/get/collision-type';
import { CollisionTypeService } from 'src/app/services/collision-types/collision-type.service';
import { FormsBaseStateService } from 'src/app/services/base-service/FormsBaseStateService';
import { HighwayMaster } from 'src/app/models/get/highway-master';
import { HighwayMasterService } from 'src/app/services/highway-master/highway-master.service';
import { HighwayType } from 'src/app/models/get/highway-type';
import { HighwayTypeService } from 'src/app/services/highway-type/highway-type.service';
import { ImpactType } from 'src/app/models/get/impact-type';
import { ImpactTypeService } from 'src/app/services/impact-types/impact-type.service';
import { JunctionType } from 'src/app/models/get/junction-type';
import { JunctionTypeService } from 'src/app/services/junction-types/junction-type.service';
import { LandmarkType } from 'src/app/models/get/landmark-type';
import { LandmarkTypeService } from 'src/app/services/landmark-types/landmark-type.service';
import { LightCondition } from 'src/app/models/get/light-condition';
import { LightConditionService } from 'src/app/services/light-conditions/light-condition.service';
import { MapService } from 'src/app/services/map-services/map.service';
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
import { TerrainType } from 'src/app/models/get/terrain-type';
import { TerrianTypeService } from 'src/app/services/terrian-type/terrian-type.service';
import { UserMaster } from 'src/app/models/get/user-master';
import { UserMasterService } from 'src/app/services/user-master/user-master.service';
import { WeatherCondition } from 'src/app/models/get/weather-condition-model';
import { WeatherConditionService } from 'src/app/services/weather-condition/weather-condition.service';
import { WoredaMaster } from 'src/app/models/get/woreda';
import { WoredaMasterService } from 'src/app/services/woreda-service/woreda-master.service';
import { ZoneMaster } from 'src/app/models/get/zone';
import { ZoneMasterService } from 'src/app/services/zone-service/zone-master.service';
import { AccidentDetailsTransaction } from 'src/app/models/get/accident-details-transaction';

@Component({
  selector: 'app-accident-details',
  templateUrl: './accident-details.component.html',
  styleUrls: ['./accident-details.component.scss']
})
//create an angular car accident data management system?
export class AccidentDetailsComponent implements OnInit {
  myForm = new FormGroup({
    userID:new FormControl(1),
    lat:new FormControl('',Validators.required),
    long:new FormControl('',Validators.required),
    dateAndTime: new FormControl('',Validators.required),
    piname:new FormControl('',Validators.required),
    policeRecordNumber: new FormControl('',Validators.required),
    psid: new FormControl('',Validators.required),


    regionId: new FormControl('',Validators.required),
    zoneId: new FormControl('',Validators.required),
    woredaId: new FormControl('',Validators.required),
    cityId: new FormControl('',Validators.required),


    subCityId: new FormControl('',Validators.required),
    kebeleName: new FormControl('',Validators.required),
    accidentTypeId: new FormControl('',Validators.required),
    weatherCondId: new FormControl('',Validators.required),

    severityId: new FormControl('',Validators.required),
    hid: new FormControl('',Validators.required),
    pavementTypeId: new FormControl('',Validators.required),
    collisionTypeId:new FormControl('',Validators.required),

    impactTypeId:new FormControl('',Validators.required),
    roadSurfaceId: new FormControl('',Validators.required),
    landmarkTypeId: new FormControl('',Validators.required),
    roadCarriagewayId: new FormControl('',Validators.required),
    junctionTypeId: new FormControl('',Validators.required),

    speedLimitId: new FormControl('',Validators.required),
    lightCondtionId: new FormControl('',Validators.required),
    airConditionId: new FormControl('',Validators.required),
    terrianTypeId:new FormControl('',Validators.required),
    causeofAccidentId: new FormControl('',Validators.required),
    accidentLocalName: new FormControl('',Validators.required),


    propertyDamage: new FormControl('',Validators.required),
    numberOfVehicles: new FormControl('',Validators.required),
    numberofVictims: new FormControl('',Validators.required),
    highwayTypeId:new FormControl('',Validators.required)
  });

  latitude:number | undefined;
 longtude:number | undefined;




  plainFooter = 'plain extra footer';
  footerRender = (): string => 'extra footer';
  accidentDetail=[] as AccidentCause[];
  accidnentDetailTransaction={} as  AccidentDetailsTransaction;
  weatherConditions=[] as WeatherCondition[];
  userMasters=[] as UserMaster[];
  policeStations=[] as PoliceStation[];
  subCityList=[] as SubCityMaster[];
  regionMasters=[] as RegionMaster[];
  zoneMasters=[] as  ZoneMaster[];
  woredaMasters=[] as WoredaMaster[];
  cityMasters=[] as CityMaster[];
  accidentTypes=[] as AccidentType[];
  collisionTypes=[] as CollisionType[];
  impactTypes=[] as ImpactType[];
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
roadspeeds=[] as SpeedLimit[];
accidentCauses=[] as AccidentCause[];
terrianTypes=[] as TerrainType[];



id:any;
idd:any;
//ps?:PoliceStation = undefined;
lat:any;
long:any;
dateAndTime: any;
piname:any;
policeRecordNumber: any;
psid: any;


regionId: any;
zoneId: any;
woredaId: any;
cityId: any;


subCityId: any;
kebeleName: any;
accidentTypeId: any;
weatherCondId: any;

severityId:any;
hid: any;
pavementTypeId: any;
collisionTypeId:any;

impactTypeId:any;
roadSurfaceId: any;
landmarkTypeId: any;
roadCarriagewayId: any;
junctionTypeId: any;

speedLimitId: any;
lightCondtionId: any;
airConditionId: any;
terrianTypeId:any;
causeofAccidentId:any;
accidentLocalName: any;

highwayTypeId:any;
propertyDamage:any;
numberOfVehicles: any;
numberofVictims: any;





   form:FormGroup;

  constructor(
    private formService:FormsBaseStateService,
    public mapService:MapService,
    private userMasterService:UserMasterService,
    private subCityService:SubCityService,
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
    private impactService:ImpactTypeService,
    private weatherService:WeatherConditionService,
    private notification:NzNotificationService,
    private terianService:TerrianTypeService,
    private collisionService:CollisionTypeService,
    public fb:FormBuilder

    ) {
this.form=this.fb.group({
  dateAndTime:['']}
  );




    }
    isFormValid(): boolean {
      return this.myForm.valid;
    }

  ngOnInit(): void {


    // this.myForm = new FormGroup({
    //   lat:new FormControl('',Validators.required),
    //   long:new FormControl('',Validators.required),
    //   collisionType:new FormControl('',Validators.required),
    //   dateAndTime: new FormControl('',Validators.required),
    //   piname: new FormControl('',Validators.required),
    //   impactType:new FormControl('',Validators.required),
    //   policeRecordNumber: new FormControl('',Validators.required),
    //   ps: new FormControl('',Validators.required),
    //   region: new FormControl('',Validators.required),
    //   zone: new FormControl('',Validators.required),
    //   woreda: new FormControl('',Validators.required),
    //   city: new FormControl('',Validators.required),
    //   subcity: new FormControl('',Validators.required),
    //   kebeleName: new FormControl('',Validators.required),
    //   user:new FormControl('',Validators.required),
    //   accidentType: new FormControl('',Validators.required),
    //   weatherCond: new FormControl('',Validators.required),
    //   severity: new FormControl('',Validators.required),
    //   hidNavigation: new FormControl('',Validators.required),
    //   pavementType: new FormControl('',Validators.required),
    //   highwayType: new FormControl('',Validators.required),
    //   roadSurface: new FormControl('',Validators.required),
    //   landmarkType: new FormControl('',Validators.required),
    //   roadCarriageway: new FormControl('',Validators.required),
    //   junctionType: new FormControl('',Validators.required),
    //   roadspeed: new FormControl('',Validators.required),
    //   lightCondtion: new FormControl('',Validators.required),
    //   airCondition: new FormControl('',Validators.required),
    //   causeofAccident: new FormControl('',Validators.required),
    //   accidentLocalName: new FormControl('',Validators.required),
    //   propertyDamage: new FormControl('',Validators.required),
    //   numberVechile: new FormControl('',Validators.required),
    //   numberVictim: new FormControl('',Validators.required),
    //   terrianType:new FormControl('',Validators.required),
    //   highwayTypeId:new FormControl('',Validators.required)
    // });















    this.GetStateFormValue();
    this.GetLatitude();
    this.GetLongtitude();
this.GetCollisionType();
this.GetAccidentDetail();
this.GetWeatherCondition();
this.GetPoliceStatioin();
this.GetSubCityMaster();
this.GetRegionMaster();
this.GetZoneMaster();
this.GetWoredaMaster();
this.GetCityMaster();
this.GetAccidentType();
this.GetAccidentSeverity();
this.GetHighwayNames();
this.GetHighwayTypes();
this.GetPavementTypes();
this.GetRoadSurfaces();
this.GetUserType();
this.GetImpactTypes();
this.GetLandmarkTypes();
this.GetRoadCarriageTypes();
this.GetLightCondition();
this.GetAirConditiion();
this.GetJunctionTypes();
this.GetRoadSpeeds();
this.GetAccidentCauses();
this.GetTerrianTypes();

  }

  GetStateFormValue()
  {
    this.formService.getFormValues().subscribe(values=>{
      this.lat=values.lat;
      this.long=values.long;

      this.piname=values.piname;
      this.policeRecordNumber=values.policeRecordNumber;
      this.psid= values.psid;


      this.regionId=values.regionId;
      this.zoneId=values.zoneId;
      this.woredaId=values.woredaId;
      this.cityId=values.cityId;


      this.subCityId=values.subCityId;
      this.kebeleName=values.kebeleName;
      this.accidentTypeId=values.accidentTypeId;
      this.weatherCondId=values.weatherCondId;

      this.severityId=values.severityId;
      this.hid=values.hid;
      this.pavementTypeId=values.pavementTypeId;
      this.collisionTypeId=values.collisionTypeId;

      this.impactTypeId=values.impactTypeId;
      this.roadSurfaceId=values.roadSurfaceId;
      this.landmarkTypeId=values.landmarkTypeId;
      this.roadCarriagewayId=values.roadCarriagewayId;
      this.junctionTypeId=values.junctionTypeId;

      this.speedLimitId=values.speedLimitId;
      this.lightCondtionId=values.lightCondtionId;
      this.airConditionId=values.airConditionId;
      this.terrianTypeId=values.terrianTypeId;
      this.causeofAccidentId=values.causeofAccidentId;
      this.accidentLocalName=values.accidentLocalName;

      this.dateAndTime=values.dateAndTime;
      this.propertyDamage=values.propertyDamage;
      this.numberOfVehicles=values.numberOfVehicles;
      this.numberofVictims=values.numberofVictims;
    })


  }

  GetLatitude()
  {

    this.myForm.patchValue({
      lat: this.mapService.latValue,
    })
  this.latitude= this.mapService.latValue;


  }
  GetLongtitude()
  {
    this.myForm.patchValue({
      long: this.mapService.longValue,
    })
    this.longtude= this.mapService.longValue;
  }

  sucessNotification(type:string):void{
    this.notification.success("Data Saved Successfully","",{nzPlacement:'topRight'});
  }
  errorNotification(type:string):void{
    this.notification.error("Data was not Saved",'',{nzPlacement:'topRight'})
  }

  // OnPoliceStationSelected()
  // {

  //   this.selectedSubCity=this.selectedPoliceStation?.subCity ;
  //   this.selectedSubCityId=this.selectedSubCity?.subCityId??0;
  //   console.log(this.selectedSubCity);

  // }
  GetImpactTypes()
  {
    this.impactService.getAll().subscribe((res)=>{
      this.impactTypes=res;
    })
  }
  GetRegionMaster()
  {
    this.regionService.getAll().subscribe((response)=>{
      this.regionMasters=response;
    })

  }
  GetZoneMaster()
  {
    this.zoneService.getAll().subscribe((response)=>{
      this.zoneMasters=response;
    })
  }
  GetWoredaMaster()
  {
    this.woredaService.getAll().subscribe((response)=>{
      this.woredaMasters=response;
    })
  }
  GetCityMaster()
  {
    this.cityMasterService.getAll().subscribe((response)=>{
      this.cityMasters=response;
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
      this.accidentTypes=response;
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
  GetCollisionType()
  {
    this.collisionService.getAll().subscribe((res)=>{
      this.collisionTypes=res;
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
    this.roadspeeds=response;
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
      this.weatherConditions=response;
    })

  }

  GetPoliceStatioin()
  {
    this.policeStationService.getAll()
    .subscribe((response:PoliceStation[])=>{

      this.policeStations=response;

    });
  }
  GetSubCityMaster()
  {
    this.subCityService.getAll().subscribe((response)=>{
      this.subCityList=response;
    })

  }
  GetUserType()
  {
    this.userMasterService.getAll().subscribe((response)=>{
      this.userMasters=response;
    })

  }
  GetTerrianTypes()

    {
      this.terianService.getAll().subscribe((res)=>{
        this.terrianTypes=res;
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

 onSubmit(){
//the below is for vechile
  this.accidentDetailTransactionService.number = this.numberOfVehicles;


  const formData = this.myForm.value ;
  this.accidentDetailTransactionService.updateNumberOfForms(this.numberOfVehicles);
  this.formService.setFormValues(formData);

//   this.accidnentDetailTransaction=this.myForm.value  as AccidentDetailsTransaction;
// this.accidnentDetailTransaction={

//   lat:this.myForm.value.lat,
//   long:this.myForm.value.long,
//   accidentId:this.myForm.value.accidentId,
//   accidentLocalName:this.myForm.value.accidentLocalName,
//   dateAndTime:this.myForm.value.dateAndTime,
//   kebeleName:this.myForm.value.kebeleName,
//   piname:this.myForm.value.piname,
//   policeRecordNumber:this.myForm.value.policeRecordNumber,
//   numberOfVehicles:this.myForm.value.numberVechile,
//   propertyDamage:this.myForm.value.propertyDamage,
//   numberofVictims:this.myForm.value.numberVictim,
//   accidentType :this.accidentTypes.find(at=>at.accidentTypeId===this.myForm.value.accidentType),
//   airCondition :this.airConditions.find(at=>at.airConditionId===this.myForm.value.airCondition),
//   causeofAccident :this.accidentCauses.find(at=>at.accidentCauseId===this.myForm.value.causeofAccident),
//   city :this.cityMasters.find(at=>at.cityId===this.myForm.value.city),
//   region :this.regionMasters.find(at=>at.regionId===this.myForm.value.region),
//   woreda :this.woredaMasters.find(at=>at.woredaId===this.myForm.value.woreda),
//   zoneMasterEntity :this.zoneMasters.find(at=>at.zoneId===this.myForm.value.zone),
//   pavementType :this.pavementTypes.find(at=>at.pavementTypeId===this.myForm.value.pavementType),
//   landmarkType :this.landMarkTypes.find(at=>at.landmarkTypeId===this.myForm.value.landmarkType),
//   terrianType :this.terrianTypes.find(at=>at.terrianTypeId===this.myForm.value.terrianType),
//   collisionType :this.collisionTypes.find(at=>at.collisionTypeId===this.myForm.value.collisionType),
//   hidNavigation :this.highwayNames.find(at=>at.hid===this.myForm.value.hidNavigation),
//   highwayType :this.highwayTypes.find(at=>at.htypeId===this.myForm.value.highwayType),
//   impactType :this.impactTypes.find(at=>at.impactTypeId===this.myForm.value.impactType),
//   junctionType :this.junctionTypes.find(at=>at.junctionTypeId===this.myForm.value.junctionType),
//   lightCondtion :this.lightConditions.find(at=>at.lightConditionId===this.myForm.value.lightCondtion),
//   subCity :this.subCityList.find(at=>at.subCityId===this.myForm.value.subcity),
//   weatherCond :this.weatherConditions.find(at=>at.weatherCondId===this.myForm.value.weatherCond),
//   user :this.userMasters.find(at=>at.userId===this.myForm.value.user),
//   speedLimit :this.roadspeeds.find(at=>at.speedLimitId===this.myForm.value.roadspeed),
//   severity :this.accidentSeverity.find(at=>at.severityId===this.myForm.value.severity),
//   roadCarriageway :this.roadCarriagewayTypes.find(at=>at.roadCarriagewayId===this.myForm.value.roadCarriageway),
//   roadSurface :this.roadSurfaces.find(at=>at.roadSurfaceId===this.myForm.value.roadSurface),
//   ps:this.policeStations.find(at=>at.psid===this.myForm.value.ps),
//   submissionFlag:1,
//   psid:"1",
//   hid:"dss",
//   //user:1

// };

   this.accidentDetailTransactionService.post(this.myForm.value).subscribe((response:any) => {
    this.accidentDetailTransactionService.setNewRecordId(response.data.accidentDetailId);
    console.log("consoloingggg number of Reoadddd")
    console.log(response.data.numberOfRoad)
    if(response.data.numberOfRoad<=0)
    {

      console.log(response.data.numberOfRoad)
      this.route.navigate(['/vehicle']);
    }
    this.accidentDetailTransactionService.NoumberOfRoads=response.data.numberOfRoad;

  //  this.accidentDetailTransactionService.accidentDetailGlobalId=response.data.accidentDetailId;
// console.log("id settting1")
//      console.log(this.idd);
//  console.log("id settting2")
    // this.router.navigate(['second-component'], { queryParams: { id } });
   //this.id = response;
   // console.log(response);
   });
console.log("hooj")
console.log( this.accidentDetailTransactionService.accidentDetailGlobalId);
console.log("jiji")
  this.sucessNotification('data');

  this.route.navigate(['/roadInvolved']);

 }

  }





//   this.formService.setFormValues(data);
//   console.log("submitting a form")
//   console.log(this.myForm.value);
//   this.accidentDetailTransactionService.post(data).subscribe(response => {
//     console.log(response);
//   });
//   console.log("submitting a form")
//  }



