import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

import { AccidentDetailsTransactionService } from 'src/app/services/accident-details-transaction/accident-details-transaction.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Router } from '@angular/router';
import { HighwayMaster } from 'src/app/models/get/highway-master';
import { HighwayMasterService } from 'src/app/services/highway-master/highway-master.service';
import { PavementType } from 'src/app/models/get/pavement-type';
import { PavementTypeService } from 'src/app/services/pavement-type/pavement-type.service';
import { RoadSurfaceCondition } from 'src/app/models/get/road-surface-condition';
import { RoadSurfaceConditionsService } from 'src/app/services/road-surface-condition/road-surface-conditions.service';
import { RoadCarriageway } from 'src/app/models/get/road-carriageway';
import { RoadCarriagewayService } from 'src/app/services/road-carriageway/road-carriageway.service';


@Component({
  selector: 'app-road-involved',
  templateUrl: './road-involved.component.html',
  styleUrls: ['./road-involved.component.scss']
})
export class RoadInvolvedComponent implements OnInit {



  selectedHighway?:any;
  selectedPavementType?:any;
  selectedRoadSurfaceCondition?:any;
  selectedCarriageWayType?:any;

  myForm = new FormGroup({
    highwayControl: new FormControl(''),
    pavementTypeControl: new FormControl(''),
    roadSurfaceConditionControl: new FormControl(''),
    carriageWayTypeControl: new FormControl('')
  });


  plainFooter = 'plain extra footer';
  footerRender = (): string => 'extra footer';
  highway=[] as HighwayMaster[];
  pavementType=[] as PavementType[];
  roadSurfaceCondition=[] as RoadSurfaceCondition[];
  carriageWayType=[] as RoadCarriageway[];

  value?: string;
   form:FormGroup;

  constructor(
    
    private accidentDetailTransactionService:AccidentDetailsTransactionService,

    private highwayService:HighwayMasterService,
    private pavementTypeService:PavementTypeService,
    private roadSurfaceConditionService:RoadSurfaceConditionsService,
    private carriageWayTypeService:RoadCarriagewayService,


    private route:Router,
    private notification:NzNotificationService,
    public fb:FormBuilder

    ) {
this.form=this.fb.group({
  dateTime:['']}
  );


    }

  ngOnInit(): void {
this.GetHighwayDetail();
this.GetPavementTypeDetail();
this.GetRoadCarrriageWayDetail();
this.GetRoadSurfaceConditionDetail();
  }

  sucessNotification(type:string):void{
    this.notification.success("Data Saved Successfully","",{nzPlacement:'topRight'});
  }
  errorNotification(type:string):void{
    this.notification.error("Data was not Saved",'',{nzPlacement:'topRight'})
  }


  GetHighwayDetail()
  {
    this.highwayService.getAll().subscribe((response:HighwayMaster[])=>{
      this.highway=response;
    });
  }



  GetPavementTypeDetail()
  {
    this.pavementTypeService.getAll().subscribe((response:PavementType[])=>{
      this.pavementType=response;
    });
  }
  

  GetRoadSurfaceConditionDetail()
  {
    this.roadSurfaceConditionService.getAll().subscribe((response:RoadSurfaceCondition[])=>{
      this.roadSurfaceCondition=response;
    });
  }
  
  

  GetRoadCarrriageWayDetail()
  {
    this.carriageWayTypeService.getAll().subscribe((response:RoadCarriageway[])=>{
      this.carriageWayType=response;
    });
  }
  

 
  AccidentPage()
  {
    this.errorNotification('error');
    this.route.navigate(['/accident']);

  }

  VehicleDetailPage(){
    this.route.navigate(['/vehicle']);

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
