import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

import { AccidentDetailsTransactionService } from 'src/app/services/accident-details-transaction/accident-details-transaction.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Router } from '@angular/router';
import { EducationLevelService } from 'src/app/services/education-level/education-level.service';
import { EducationLevel } from 'src/app/models/get/education-level';
import { LevelOfLicence } from 'src/app/models/get/level-of-licence';
import { LevelOfLicenceService } from 'src/app/services/level-of-licence/level-of-licence.service';
import { DrivingLicenceCatagory } from 'src/app/models/get/driving-licence-catagory';
import { DrivingLicenceCategoriesService } from 'src/app/services/driving-licence-category/driving-licence-categories.service';
import { DriverExperience } from 'src/app/models/get/driver-experience';
import { DriverExperienceService } from 'src/app/services/driver-experience/driver-experience.service';
import { VehicleRelation } from 'src/app/models/get/vehicle-relation';
import { VechileRelationService } from 'src/app/services/vechile-relations/vechile-relation.service';
import { VehicleOwnership } from 'src/app/models/get/vehicle-ownership';
import { VechileOwnerService } from 'src/app/services/vechile-ownership/vechile-owner.service';
import { VehicleServiceAge } from 'src/app/models/get/vehicle-service-age';
import { VehicleServiceAgeService } from 'src/app/services/vehicle-service-age/vehicle-service-age.service';
import { VechicleMasterEntity } from 'src/app/models/get/vechicle-master';
import { VechileMasterService } from 'src/app/services/vechile-masters/vechile-master.service';
import { VehicleMovementMaster } from 'src/app/models/get/vehicle-movement-master';
import { VechileMovementService } from 'src/app/services/vechile-movements/vechile-movement.service';
import { VehicleDefect } from 'src/app/models/get/vehicle-defect';
import { VechileDefectsService } from 'src/app/services/vechil-defect/vechile-defects.service';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.scss']
})
export class VehicleDetailsComponent implements OnInit {

 

  accusedStatus:number=0;
  driverName?: string;
  selectedGender:number = 0;
  selectedEducationLevel?:any;
  drivingLicenceStat?:number=0;
  licenceNumber?:String;
  selectedLevelOfLicence?:any;
  selectedDrivingLicenceCategory?:any;
  thirdPartyInsurance?:number=0;
  alcholUsed?:number=0;
  alcholTested?:number=0;
  alcholLevel?:number=0.0;
  speedLimitExceeded?:number=0;
  speedLevel?:number=0;
  selectedDriverExperience?:any;
  plateNumber?:String;
  selectedDriverVehicleRelation?:any;
  selectedVehicleOwnership?:any;
  selectedVehicleServiceAge?:any;
  selectedVehicleType?:any;
  selectedVehicleMovement?: any;
  selectedVehicleDefect?:any;


  myForm = new FormGroup({
    diverNameControl: new FormControl(''),
    genderControl: new FormControl(''),
    educationLevelControl: new FormControl(''),
    driverLicenceAvailableControl: new FormControl(''),
    accusedStatusControl: new FormControl(''),
    licenceNumberControl: new FormControl(''),
    levelOfLicenceControl: new FormControl(''),
    drivingLicenceCategoriesControl: new FormControl(''),
    thirdPartyInsuranceControl: new FormControl(''),
    alcholUsedControl: new FormControl(''),
    alcholTestedControl: new FormControl(''),
    alcholLevelControl: new FormControl(''),
    speedLimitExceededControl: new FormControl(''),
    speedLevelControl: new FormControl(''),
    driverExperienceControl: new FormControl(''),
    plateNumberControl:new FormControl(''),
    driverVehicleRelationControl: new FormControl(''),
    vehicleOwnershipControl: new FormControl(''),
    vehicleServiceAgeControl:new FormControl(''),
    vehicleTypeControl: new FormControl(''),
    vehicleMovementControl: new FormControl(''),
    vehicleDefectControl: new FormControl(''),

  });


  plainFooter = 'plain extra footer';
  footerRender = (): string => 'extra footer';
  educationLevel=[] as EducationLevel[];
  levelOfLicence=[] as LevelOfLicence[];
  drivingLicenceCategories=[] as DrivingLicenceCatagory[];
  driverExperience=[] as DriverExperience[]; 

  driverVehicleRelation=[] as VehicleRelation[];
  vehicleOwnership=[] as VehicleOwnership[];
  vehicleServiceAge=[] as VehicleServiceAge[];
  vehicleType=[] as VechicleMasterEntity[];
  vehicleMovement=[] as VehicleMovementMaster[];
  vehicleDefect=[] as VehicleDefect[];


  value?: string;
   form:FormGroup;

  constructor(
    
    private educationLevelService:EducationLevelService,
    private accidentDetailTransactionService:AccidentDetailsTransactionService,
    private levelOfLicenceService:LevelOfLicenceService,
    private drivingLicenceCategoriesService: DrivingLicenceCategoriesService,
private driverExperienceService: DriverExperienceService,
private driverVehicleRelationService: VechileRelationService,
private vehicleOwnershipService: VechileOwnerService,
private vehicleServiceAgeService: VehicleServiceAgeService,
private vehicleTypeService: VechileMasterService,
private vehicleMovementService: VechileMovementService,
private vehicleDefectService: VechileDefectsService,

    private route:Router,
    private notification:NzNotificationService,
    public fb:FormBuilder

    ) {
this.form=this.fb.group({
  dateTime:['']}
  );


    }

  ngOnInit(): void {
this.GetEducationLevelDetail();
this.GetLevelOfLicenceDetail();
this.GetDrivingLicenceCategoriesDetail();
this.GetDriverExperiencesDetail();
this.GetDriverVehicleRelationDetail();
this.GetVehicleOwnershipRelationDetail();
this.GetVehicleServiceAgeDetail();
this.GetVehicleDefectDetail();
  }
  sucessNotification(type:string):void{
    this.notification.success("Data Saved Successfully","",{nzPlacement:'topRight'});
  }
  errorNotification(type:string):void{
    this.notification.error("Data was not Saved",'',{nzPlacement:'topRight'})
  }


  OnDriverLicenceStatChanged(){
    if(this.drivingLicenceStat!=1)
{
  this.licenceNumber="";
  this.selectedLevelOfLicence=null;
  this.selectedDrivingLicenceCategory=null;
}

  }

  OnAlcholUsedStatChanged(){
if(this.alcholUsed != 1){
  this.alcholTested=0;
  this.alcholLevel=0.0;
}
  }

  OnAlcholTestedStatChanged(){
if(this.alcholTested!=1){
  this.alcholLevel=0.0;
}
  }


  OnspeedLimitExceededStatChanged()
{
if(this.speedLimitExceeded != 1){
this.speedLevel=0;
}
}



  GetEducationLevelDetail()
  {
    this.educationLevelService.getAll().subscribe((response:EducationLevel[])=>{
      this.educationLevel=response;
    });
  }


  GetLevelOfLicenceDetail()
  {
    this.levelOfLicenceService.getAll().subscribe((response:LevelOfLicence[])=>{
      this.levelOfLicence=response;
    });
  }


  GetDrivingLicenceCategoriesDetail()
  {
    this.drivingLicenceCategoriesService.getAll().subscribe((response:DrivingLicenceCatagory[])=>{
      this.drivingLicenceCategories=response;
    });
  }


  GetDriverExperiencesDetail()
  {
    this.driverExperienceService.getAll().subscribe((response:DriverExperience[])=>{
      this.driverExperience=response;
    });
  }


  GetDriverVehicleRelationDetail()
  {
    this.driverVehicleRelationService.getAll().subscribe((response:VehicleRelation[])=>{
      this.driverVehicleRelation=response;
    });
  }


  GetVehicleOwnershipRelationDetail()
  {
    this.vehicleOwnershipService.getAll().subscribe((response:VehicleOwnership[])=>{
      this.vehicleOwnership=response;
    });
  }

  GetVehicleServiceAgeDetail()
  {
    this.vehicleServiceAgeService.getAll().subscribe((response:VehicleServiceAge[])=>{
      this.vehicleServiceAge=response;
    });
  }

  
  GetVehicleTypeDetail()
  {
    this.vehicleTypeService.getAll().subscribe((response:VechicleMasterEntity[])=>{
      this.vehicleType=response;
    });
  }
  
  
    
  GetVehicleMovementDetail()
  {
    this.vehicleMovementService.getAll().subscribe((response: VehicleMovementMaster[])=>{
      this.vehicleMovement=response;
    });
  }
  

      
  GetVehicleDefectDetail()
  {
    this.vehicleDefectService.getAll().subscribe((response: VehicleDefect[])=>{
      this.vehicleDefect=response;
    });
  }


  AccidentPage()
  {
    this.errorNotification('error');
    this.route.navigate(['/accident']);

  }

  VictimDetailPage(){
    this.route.navigate(['/victim']);

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
