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

@Component({
  selector: 'app-victim-details',
  templateUrl: './victim-details.component.html',
  styleUrls: ['./victim-details.component.scss']
})
export class VictimDetailsComponent implements OnInit {



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
    alcholLevelControl:new FormControl(''),
    speedLimitExceededControl: new FormControl('')
  });


  plainFooter = 'plain extra footer';
  footerRender = (): string => 'extra footer';
  educationLevel=[] as EducationLevel[];
  levelOfLicence=[] as LevelOfLicence[];
  drivingLicenceCategories=[] as DrivingLicenceCatagory[];

  value?: string;
   form:FormGroup;

  constructor(
    
    private educationLevelService:EducationLevelService,
    private accidentDetailTransactionService:AccidentDetailsTransactionService,
    private levelOfLicenceService:LevelOfLicenceService,
    private drivingLicenceCategoriesService: DrivingLicenceCategoriesService,

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
if(this.speedLimitExceeded !=1){
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



 
  AccidentPage()
  {
    this.errorNotification('error');
    this.route.navigate(['/vehicle']);

  }

  VictimDetailPage(){
    // this.route.navigate(['/victim']);

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
