import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { BehaviorSubject } from 'rxjs';
import { RegionMaster } from 'src/app/models/get/region';
import { LanguageService } from 'src/app/services/language-change/language-change-service';
import { RegionsService } from 'src/app/services/region/regions.service';
import { SharedButtonLabelService } from 'src/app/services/shared-modal-button/shared-modal-button.service';
import { ZoneMasterService } from 'src/app/services/zone-service/zone-master.service';

@Component({
  selector: 'app-zone-modal',
  templateUrl: './zone-modal.component.html',
  styleUrls: ['./zone-modal.component.scss']
})
export class ZoneModalComponent implements OnInit {
  regionMasters$:BehaviorSubject<RegionMaster[]> = new BehaviorSubject<RegionMaster[]>([]);
  @Input() action: string | undefined; // Receive the action parameter
  buttonLabel!: string;

  regionId:any;
  validateForm: FormGroup;
  zones: any[] = [];
  constructor( private sharedbuttonService: SharedButtonLabelService, private regionService:RegionsService, private languageService:LanguageService,private router: Router, private fb: FormBuilder,private zoneService:ZoneMasterService,private notification:NzNotificationService) {
    this.validateForm = new FormGroup({
      regionId: new FormControl(null),
      zoneName:new FormControl(null),
      zoneNameAm:new FormControl(null),
      zoneNameOr:new FormControl(null),
      zoneNameTi:new FormControl(null),
      zoneNameAf:new FormControl(null),
      zoneNameSo:new FormControl(null),

    });
   }

  ngOnInit(): void {
    this.setButtonLable();
    this.languageService.selectedLanguage$.subscribe(language => {

      this.GetRegionMaster(language);

    });

  }
  setButtonLable()
{
  this.sharedbuttonService.getButtonLabel().subscribe((label: string) => {
    if (this.action === 'Edit') {

      this.buttonLabel = 'Update Zone'; // Customize the label for editing
      console.log(this.buttonLabel);
    } else {
      this.buttonLabel = label; // Use the label as it is for adding
    }
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
    const newZone = response;

    // Add the newly added region to the regions array
    this.zones.push(newZone);
          this.closeModalAndNavigate();
          window.location.reload();
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
        console.log("regionListList")
        console.log(this.regionMasters$)
        // Reset the selected option when the options change
        this.regionId = null;
      },
      (error) => {
        console.error('Error retrieving data:', error);
      }
    );


  }
}
