import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { CourtChargeType } from 'src/app/models/get/court-charge-type';
import { CourtCaseServiceService } from 'src/app/services/court-charge-transaction/court-case-service.service';
import { CourtChargeServiceService } from 'src/app/services/court-charge/court-charge-service.service';
import { LanguageService } from 'src/app/services/language-change/language-change-service';

@Component({
  selector: 'app-accident-court-case-modal',
  templateUrl: './accident-court-case-modal.component.html',
  styleUrls: ['./accident-court-case-modal.component.scss']
})
export class AccidentCourtCaseModalComponent implements OnInit {
  date = null;
  cases:CourtChargeType[]=[];
  @Input() selectedAccident: any;
  myForm = new FormGroup({
    accidentId: new FormControl('',Validators.required),
    courtChargeID: new FormControl('',Validators.required),
    chargeDate:new FormControl('',Validators.required),
    penaltyAmount: new FormControl('',Validators.required),
    imprisonmentDays:new FormControl('',Validators.required),
    // Add more form fields and validators as needed
  });

  //form:FormGroup;
  constructor(private notification:NzNotificationService,private route:Router,private courtCaseTransactionService:CourtCaseServiceService,private fb: FormBuilder,private languageService:LanguageService,private modal: NzModalService,private courtChargeService:CourtChargeServiceService){ }

  ngOnInit(): void { 

    this.languageService.selectedLanguage$.subscribe(language => {
      this.courtChargeService.getVechilesListByLanguage(language).subscribe((response: any[]) => {
        this.cases = response;
      });});

    this.loadCourtCharge();
  }
  loadCourtCharge()
  {
    this.courtChargeService.vechiles$.subscribe(res => {
      this.cases = res;

    });

  }
  onSubmit(): void {
    for (const i in this.myForm.controls) {
      if (this.myForm.controls.hasOwnProperty(i)) {
        this.myForm.controls[i].markAsDirty();
        this.myForm.controls[i].updateValueAndValidity();
      }
    }
  
      const accidentId = this.selectedAccident?.accidentId;
      console.log(accidentId)
      const formData = { ...this.myForm.value, accidentId };


      this.courtCaseTransactionService.post(formData ).subscribe((response:any) => {

        this.sucessNotification('data');
        this.closeModalAndNavigate();
        window.location.reload();

    
       });
      this.myForm.reset();
    
  }
  onChange(result: Date): void {
    console.log('onChange: ', result);
  }
  sucessNotification(type:string):void{
    this.notification.success("Court case added Successfully","",{nzPlacement:'topRight'});
  }
  closeModalAndNavigate(): void {
    // Close the modal here (specific implementation depends on the modal library or method you are using)

    // Navigate back to the list of table page
    this.route.navigate(['/accidentDetailsCourtCases']);
  }

}
