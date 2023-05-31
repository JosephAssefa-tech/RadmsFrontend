import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RegionsService } from 'src/app/services/region/regions.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Router } from '@angular/router';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { RegionMaster } from 'src/app/models/get/region';
import { Subscription } from 'rxjs';
import { SharedButtonLabelService } from 'src/app/services/shared-modal-button/shared-modal-button.service';
@Component({
  selector: 'app-shared-modal',
  templateUrl: './shared-modal.component.html',
  styleUrls: ['./shared-modal.component.scss']
})
export class SharedModalComponent implements OnInit, OnDestroy {
  @Input() action: string; // Receive the action parameter
  @Input() isEditMode: boolean;
  buttonLabel: string;
  validateForm!: FormGroup;
  selectedRowData: any;
  regions: any[] = [];
  private selectedRowDataSubscription: Subscription;
  @Output() dataUpdated: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private router: Router,
    private notification:NzNotificationService,
    private sharedbuttonService: SharedButtonLabelService,
    private modalRef: NzModalRef,
    private fb: FormBuilder,
    private regionService: RegionsService
  ) {}

  ngOnInit(): void {
  this.setButtonLable();
    this.validateForm = this.fb.group({
      regionName: ['', Validators.required],
      regionNameAm:[''],
      regionNameOr:[''],
      regionNameSo:[''],
      regionNameTi:[''],
      regionNameAf:['']


    });

    this.selectedRowDataSubscription = this.regionService.getSelectedRegionRowData()
    .subscribe((rowData: any) => {
      this.selectedRowData = rowData;
      this.validateForm.patchValue({
        regionName: rowData.regionName,
        regionNameAm:rowData.regionNameAm,
        regionNameOr:rowData.regionNameOr,
        regionNameSo:rowData.regionNameSo,
        regionNameTi:rowData.regionNameTi,
        regionNameAf:rowData.regionNameAf,

      });
    });

  }
setButtonLable()
{
  this.sharedbuttonService.getButtonLabel().subscribe((label: string) => {
    if (this.action === 'Edit') {
      this.buttonLabel = 'Update Region'; // Customize the label for editing
    } else {
      this.buttonLabel = label; // Use the label as it is for adding
    }
  });
}
  ngOnDestroy(): void {
    if (this.selectedRowDataSubscription) {
      this.selectedRowDataSubscription.unsubscribe();
    }
  }

  onUpdate(): void {
    if (this.validateForm.valid) {
      const updatedData = {
        ...this.selectedRowData,
        ...this.validateForm.value
      };
      this.dataUpdated.emit(updatedData);
    }
  }

  onSave(): void {
    if (this.validateForm.valid) {
      const newData = this.validateForm.value;
      if (this.isEditMode) {
        newData.id = this.selectedRowData.id; // Preserve the ID for update
      }
      this.dataUpdated.emit(newData);
    }
  }

  handleAddClick(): void {
    // Your implementation for add operation
    // ...
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
      this.regionService.post(formValues).subscribe(
        response => {
          // Handle the success response
          this.sucessNotification('data');
              // Assuming the response contains the newly added region
    const newZone = response;

    // Add the newly added region to the regions array
    this.regions.push(newZone);
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
}

