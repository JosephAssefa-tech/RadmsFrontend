import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { BehaviorSubject } from 'rxjs';
import { LanguageService } from 'src/app/services/language-change/language-change-service';
import { RegionsService } from 'src/app/services/region/regions.service';
import { ZoneMasterService } from 'src/app/services/zone-service/zone-master.service';

@Component({
  selector: 'app-zone-modal',
  templateUrl: './zone-modal.component.html',
  styleUrls: ['./zone-modal.component.scss']
})
export class ZoneModalComponent implements OnInit {
  regionMasters$:BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);


  regionId:any;
  validateForm!: FormGroup;
  zones: any[] = [];
  constructor(  private regionService:RegionsService, private languageService:LanguageService,private router: Router, private fb: FormBuilder,private zoneService:ZoneMasterService,private notification:NzNotificationService) { }

  ngOnInit(): void {
    this.languageService.selectedLanguage$.subscribe(language => {

      this.GetRegionMaster(language);
    });
    this.validateForm = this.fb.group({
      zoneName: [null, Validators.required],
      regionId:[null,Validators.required]

    });
  }
  submitForm(): void {
    for (const i in this.validateForm.controls) {
      if (this.validateForm.controls.hasOwnProperty(i)) {
        this.validateForm.controls[i].markAsDirty();
        this.validateForm.controls[i].updateValueAndValidity();
      }
    }

    if (this.validateForm.valid) {
    // Get the form values
    const formValues = this.validateForm.value;
      // Invoke the service method
      this.zoneService.post(formValues).subscribe(
        response => {
          // Handle the success response
          this.sucessNotification('data');
              // Assuming the response contains the newly added region
    const newRegion = response;

    // Add the newly added region to the regions array
    this.zones.push(newRegion);
          this.closeModalAndNavigate();
        },
        error => {
          // Handle the error response
          console.error('Error submitting form:', error);
        }
      );
    } else {
      // Perform your desired actions when the form is invalid
      console.log('Form is invalid. Please fill in all required fields.');
    }
  }
  sucessNotification(type:string):void{
    this.notification.success("Data Saved Successfully","",{nzPlacement:'topRight'});
  }
  errorNotification(type:string):void{
    this.notification.error("Data was not Saved",'',{nzPlacement:'topRight'})
  }
  closeModalAndNavigate(): void {
    // Close the modal here (specific implementation depends on the modal library or method you are using)

    // Navigate back to the list of table page
    this.router.navigate(['/region']);
  }
  GetRegionMaster(lanugage:string)
  {
    this.regionService.getAllByLanguage(lanugage).subscribe(
      (response) => {
        this.regionMasters$.next(response);
        // Reset the selected option when the options change
        this.regionId = null;
      },
      (error) => {
        console.error('Error retrieving data:', error);
      }
    );


  }
}
