import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
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
  myForm = new FormGroup({
    accidentId: new FormControl('',Validators.required),
    courtChargeID: new FormControl('',Validators.required),
    chargeDate:new FormControl('',Validators.required),
    penaltyAmount: new FormControl('',Validators.required),
    imprisonmentDays:new FormControl('',Validators.required),
    // Add more form fields and validators as needed
  });
  @Input() selectedAccident: any;
  //form:FormGroup;
  constructor(private route:Router,private courtCaseTransactionService:CourtCaseServiceService,private fb: FormBuilder,private languageService:LanguageService,private modal: NzModalService,private courtChargeService:CourtChargeServiceService){ }

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
    console.log
    if (this.myForm.valid) {
      const accidentID = this.selectedAccident?.accidentId;
      const formData = { ...this.myForm.value, accidentID };


      this.courtCaseTransactionService.post(this.myForm.value).subscribe((response:any) => {

    
          console.log(response.data.numberOfRoad)
          this.route.navigate(['/vehicle']);

       
    
    
       });
      this.myForm.reset();
    }
  }
  onChange(result: Date): void {
    console.log('onChange: ', result);
  }

}
