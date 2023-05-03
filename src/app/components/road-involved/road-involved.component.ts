import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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
import { RoadsInvolvedDetailService } from 'src/app/services/roads-involved-details/roads-involved-detail.service';
import { AccidentDetail } from 'src/app/models/post/accident-post-model';
import { AccidentDetailsTransaction } from 'src/app/models/get/accident-details-transaction';
import { VechileMasterService } from 'src/app/services/vechile-masters/vechile-master.service';
import { VechicleMasterEntity } from 'src/app/models/get/vechicle-master';


@Component({
  selector: 'app-road-involved',
  templateUrl: './road-involved.component.html',
  styleUrls: ['./road-involved.component.scss']
})
export class RoadInvolvedComponent implements OnInit {
  count = 1;

  selectedAccident:any;
  selectedHighway?:any;
  selectedPavementType?:any;
  selectedRoadSurfaceCondition?:any;
  selectedCarriageWayType?:any;

  myForm = new FormGroup({
    accidentId: new FormControl(''),
    roadsInvolvedId:new FormControl(''),
    hid: new FormControl('',Validators.required),
    pavementTypeId: new FormControl('',Validators.required),
    roadSurfaceId: new FormControl('',Validators.required),
    roadCarriagewayId: new FormControl('',Validators.required)
  });


  plainFooter = 'plain extra footer';
  footerRender = (): string => 'extra footer';
  accident=[] as AccidentDetailsTransaction[];
  highway=[] as HighwayMaster[];
  pavementType=[] as PavementType[];
  roadSurfaceCondition=[] as RoadSurfaceCondition[];
  carriageWayType=[] as RoadCarriageway[];
  vechileTypes=[] as VechicleMasterEntity[];

  value?: string;
   form:FormGroup;

  constructor(

    private roadsInvolvedDetailService:RoadsInvolvedDetailService,
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
      // Subscribe to the newRecordId observable
      this.accidentDetailTransactionService.getNewRecordId().subscribe(id => {
        if (id) {
          // Set the newly created record's ID in the form
          this.myForm.patchValue({ accidentId: id,roadsInvolvedId:id });
        }
      });
this.getAccident();
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
  getAccident()
  {
    this.accidentDetailTransactionService.getAll().subscribe((response)=>{
      this.accident=response;
    })

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


  const record = { ...this.myForm.value, accidentId: this.myForm.value.accidentId ,roadsInvolvedId:this.myForm.value.roadsInvolvedId};
  //delete record.accidentId;
  console.log("submitting a road involved id")
  this.roadsInvolvedDetailService.post(record).subscribe(response => {
    console.log(response);
  });
  this.sucessNotification('saved');
  if (this.count < this.accidentDetailTransactionService.NoumberOfRoads) {
    // reset the form here

    this.myForm.controls['hid'].reset();
    this.myForm.controls['pavementTypeId'].reset();
    this.myForm.controls['roadSurfaceId'].reset();
    this.myForm.controls['roadCarriagewayId'].reset();


    this.count++;
  } else {
    // navigate to other page
    this.route.navigate(['/vehicle']);
  }

  console.log("submitting a form")
 }
 isFormValid(): boolean {
  return this.myForm.valid;
}

}
