import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

import { AccidentDetailsTransactionService } from 'src/app/services/accident-details-transaction/accident-details-transaction.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Router } from '@angular/router';
import { VictimTypeService } from 'src/app/services/victim-type/victim-type.service';
import { VictimTypeLookup } from 'src/app/models/get/victim-type-lookup';
import { VehiclesEntity } from 'src/app/models/get/vehicles';
import { VehicleListService } from 'src/app/services/vehicles-service/vehicle-list.service';
import { EmploymentStatus } from 'src/app/models/get/employment-status';
import { EmployementStatusService } from 'src/app/services/employment-status/employement-status.service';
import { SeverityLevel } from 'src/app/models/get/severity-level';
import { SeverityLevelService } from 'src/app/services/severity-level/severity-level.service';
import { HealthCondition } from 'src/app/models/get/health-condition';
import { HealthConditiionService } from 'src/app/services/health-condition/health-conditiion.service';
import { VictimMovementMaster } from 'src/app/models/get/victim-movement-master';
import { VictimMovementService } from 'src/app/services/victim-movement/victim-movement.service';
import { SeatingType } from 'src/app/models/get/seating-type';
import { SeatingTypeService } from 'src/app/services/seating-type/seating-type.service';
import { PedestrianMovement } from 'src/app/models/get/pedestrian-movement';
import { PedestrainMovementService } from 'src/app/services/pedestrain-movements/pedestrain-movement.service';

@Component({
  selector: 'app-victim-details',
  templateUrl: './victim-details.component.html',
  styleUrls: ['./victim-details.component.scss']
})
export class VictimDetailsComponent implements OnInit {



  selectedVictimType?:any;
  victimName?:string;
  selectedGender?:number=0;
  age?:number;
  selectedVehicle?:any;
  selectedEmploymentStatus?:any;
  selectedAccidentSeverity?:any;
  selectedHealthCondition?:any;
  selectedVictimMovement?:any;
  selectedSeatingType?:any;
  selectedPedestrianMovement?:any;
  airbag?:number=0;
  seatbelt?:number=0;
  heilmet?:number=0;


  myForm = new FormGroup({
    victimTypeControl: new FormControl(''),
    victimNameControl: new FormControl(''),
    genderControl: new FormControl(''),
    ageControl: new FormControl(''),
    vehicleControl: new FormControl(''),
    victimEmploymentStatusControl: new FormControl(''),
    accidentSeverityControl: new FormControl(''),
    healthConditionControl: new FormControl(''),
    victimMovementControl: new FormControl(''),
    seatingTypeControl: new FormControl(''),
    pedestrianMovementControl: new FormControl('')
  });


  plainFooter = 'plain extra footer';
  footerRender = (): string => 'extra footer';
  victimTypes=[] as VictimTypeLookup[];
  vehicle=[] as VehiclesEntity[];
  employmentStatus=[] as EmploymentStatus[];
  accidentSeverity=[] as SeverityLevel[];
  healthConditions=[] as HealthCondition[];
  victimMovement=[] as VictimMovementMaster[];
  seatingType=[] as SeatingType[];
  pedestrianMovement=[] as PedestrianMovement[];

  value?: string;
   form:FormGroup;

  constructor(

    private accidentDetailTransactionService:AccidentDetailsTransactionService,

    private victimTypeService:VictimTypeService,
    private vehicleService:VehicleListService,
    private employmentStatusService:EmployementStatusService,
    private accidentSeverityService:SeverityLevelService,
    private healthConditionService:HealthConditiionService,
    private victimMovementService:VictimMovementService,
    private seatingTypeService:SeatingTypeService,
    private pedestrianMovementService:PedestrainMovementService,


    private route:Router,
    private notification:NzNotificationService,
    public fb:FormBuilder

    ) {
this.form=this.fb.group({
  dateTime:['']}
  );


    }

  ngOnInit(): void {
this.GetVictimTypeDetail();
this.GetAccidentSeverityDetail();
this.GetEmploymentStatusDetail();
this.GetHealthConditionDetail();
this.GetPedestrianMovementDetail();
this.GetSeatingTypeDetail();
this.GetVehicleDetail();
this.GetVictimMovementDetail();
  }
  sucessNotification(type:string):void{
    this.notification.success("Data Saved Successfully","",{nzPlacement:'topRight'});
  }
  errorNotification(type:string):void{
    this.notification.error("Data was not Saved",'',{nzPlacement:'topRight'})
  }


  GetVictimTypeDetail()
  {
    this.victimTypeService.getAll().subscribe((response:VictimTypeLookup[])=>{
      this.victimTypes=response;
    });
  }



  GetVehicleDetail()
  {
    this.vehicleService.getAll().subscribe((response:VehiclesEntity[])=>{
      this.vehicle=response;
    });
  }



  GetEmploymentStatusDetail()
  {
    this.employmentStatusService.getAll().subscribe((response:EmploymentStatus[])=>{
      this.employmentStatus=response;
    });
  }


  GetAccidentSeverityDetail()
  {
    this.accidentSeverityService.getAll().subscribe((response:SeverityLevel[])=>{
      this.accidentSeverity=response;
    });
  }




  GetHealthConditionDetail()
  {
    this.healthConditionService.getAll().subscribe((response:HealthCondition[])=>{
      this.healthConditions=response;
    });
  }



  GetVictimMovementDetail()
  {
    this.victimMovementService.getAll().subscribe((response:VictimMovementMaster[])=>{
      this.victimMovement=response;
    });
  }



  GetSeatingTypeDetail()
  {
    this.seatingTypeService.getAll().subscribe((response:SeatingType[])=>{
      this.seatingType=response;
    });
  }

  GetPedestrianMovementDetail()
  {
    this.pedestrianMovementService.getAll().subscribe((response:PedestrianMovement[])=>{
      this.pedestrianMovement=response;
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
