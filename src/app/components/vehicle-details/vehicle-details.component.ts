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
import { VechileDetailService } from 'src/app/services/vechile-details/vechile-detail.service';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.scss']
})
export class VehicleDetailsComponent implements OnInit {



  accusedStatus:number=0;
  driverName?: string;
  selectedGender:number = 0;
  educationLevelId?:any;
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
  selectedEducationLevel?:any;


  myForm = new FormGroup({
    accidentId: new FormControl(''),
    driverName: new FormControl(''),
    genderId: new FormControl(''),
    educationLevelId: new FormControl(''),
    dlnumber: new FormControl(''),
    accuseStatus: new FormControl(''),
    dllevelId: new FormControl(''),
    dlcatagoryId: new FormControl(''),
    validInsurance: new FormControl(''),
    isAlcohalConsumed: new FormControl(''),
    alcohalConsumptionLevel: new FormControl(''),
    isOverSpeed: new FormControl(''),
    recordedSpeed: new FormControl(''),
    driverExperienceId: new FormControl(''),
    numberPlate:new FormControl(''),
    vehicleRelationId: new FormControl(''),
    vehicleOwnershipId: new FormControl(''),
    vehicleAgeId:new FormControl(''),
    vehicleId: new FormControl(''),
    vehicleMovementId: new FormControl(''),
    vehicleDefectId: new FormControl(''),
    driverAge: new FormControl(''),
    dlstatus: new FormControl('')

  });


  plainFooter = 'plain extra footer';
  footerRender = (): string => 'extra footer';

  educationLevels=[] as EducationLevel[];
  levelOfLicences=[] as LevelOfLicence[];
  drivingLicenceCategories=[] as DrivingLicenceCatagory[];
  driverExperiences=[] as DriverExperience[];
  driverVehicleRelation=[] as VehicleRelation[];
  vehicleOwnership=[] as VehicleOwnership[];
  vehicleServiceAge=[] as VehicleServiceAge[];
  vehicleMovements=[] as VehicleMovementMaster[];
  vehicleDefect=[] as VehicleDefect[];
  vechileTypes=[] as VechicleMasterEntity[];

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
private vehicleMovementService: VechileMovementService,
private vehicleDefectService: VechileDefectsService,
private vechileMasterService:VechileMasterService,
private vechileDetailService:VechileDetailService,

    private route:Router,
    private notification:NzNotificationService,
    public fb:FormBuilder

    ) {
this.form=this.fb.group({
  dateTime:['']}
  );


    }

  ngOnInit(): void {
    this.accidentDetailTransactionService.getNewRecordId().subscribe(id => {
      if (id) {
        // Set the newly created record's ID in the form
        this.myForm.patchValue({ accidentId: id });
      }
    });
this.GetEducationLevelDetail();
this.GetLevelOfLicenceDetail();
this.GetDrivingLicenceCategoriesDetail();
this.GetDriverExperiencesDetail();
this.GetDriverVehicleRelationDetail();
this.GetVehicleOwnershipRelationDetail();
this.GetVehicleServiceAgeDetail();
this.GetVehicleDefectDetail();
this.GetVechileType();
this.GetVehicleMovementDetail();
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
      this.educationLevels=response;
    });
  }

  GetVechileType()
  {
this.vechileMasterService.getAll().subscribe((response)=>{
this.vechileTypes=response;

})
  }
  GetLevelOfLicenceDetail()
  {
    this.levelOfLicenceService.getAll().subscribe((response:LevelOfLicence[])=>{
      this.levelOfLicences=response;
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
      this.driverExperiences=response;
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



  GetVehicleMovementDetail()
  {
    this.vehicleMovementService.getAll().subscribe((response: VehicleMovementMaster[])=>{
      this.vehicleMovements=response;
    });
  }



  GetVehicleDefectDetail()
  {
    this.vehicleDefectService.getAll().subscribe((response: VehicleDefect[])=>{
      this.vehicleDefect=response;
    });
  }


  RoadInvolvedPage()
  {
    this.errorNotification('error');
    this.route.navigate(['/roadInvolved']);

  }

  VictimDetailPage(){
    this.route.navigate(['/victim']);

  }

 onSubmit(){
  //if the first accident id assigning not working
  //accidentId.patch({
  //  id:this.accidentDetailTransactionService.idd;
  //})
  const record = { ...this.myForm.value, accidentId: this.myForm.value.accidentId };
  //delete record.accidentId;
  console.log("submitting a road involved id")
  this.vechileDetailService.post(record).subscribe(response => {
    console.log(response);
  });
  this.sucessNotification('saved');
  this.route.navigate(['/victim']);
  console.log("submitting a form")

 }

}
