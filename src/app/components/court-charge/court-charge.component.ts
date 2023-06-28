import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NzButtonType } from 'ng-zorro-antd/button';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { CourtChargeType } from 'src/app/models/get/court-charge-type';
import { CourtChargeServiceService } from 'src/app/services/court-charge/court-charge-service.service';
import { LanguageService } from 'src/app/services/language-change/language-change-service';
import { SharedButtonLabelService } from 'src/app/services/shared-modal-button/shared-modal-button.service';
import { AccidentTypeModalComponent } from 'src/app/shared/accident-type-modal/accident-type-modal.component';
import { CourtChargeModalComponent } from 'src/app/shared/court-charge-modal/court-charge-modal.component';

@Component({
  selector: 'app-court-charge',
  templateUrl: './court-charge.component.html',
  styleUrls: ['./court-charge.component.scss']
})
export class CourtChargeComponent implements OnInit {
  courtChargeType:CourtChargeType[]=[];
  constructor(private sharedbuttonService: SharedButtonLabelService, private notification:NzNotificationService, private languageService:LanguageService,private fb: FormBuilder,private modal: NzModalService,private courtChargeService:CourtChargeServiceService) {}



  ngOnInit(): void {
    this.languageService.selectedLanguage$.subscribe(language => {
      this.courtChargeService.getVechilesListByLanguage(language).subscribe((vechiles: any[]) => {
        this.courtChargeType = vechiles;
      });});

    this.loadCourtCharge();
  }
  loadCourtCharge()
  {
    this.courtChargeService.vechiles$.subscribe(vechiles => {
      this.courtChargeType = vechiles;

    });

  }
  openDeleteConfirmation(courtChargeID: number) {
    this.modal.confirm({
      nzTitle: 'Confirm Delete',
      nzContent: 'Are you sure you want to delete this court charge type?',
      nzOkText: 'Yes',
      nzOkType: 'danger' as NzButtonType,
      nzCancelText: 'No',
      nzClassName: 'custom-confirm-modal',
      nzOnOk: () => {
        this.deleteVechile(courtChargeID);
      },
      nzOnCancel: () => {
        this.errorNotification('data');
      }
    });
  }
  onEditRow(rowData: any): void {
    console.log("update the lable here")
    this.sharedbuttonService.setButtonLabel('Update');
    this.courtChargeService.updateSelectedRegionRowData(rowData);
    this.showModal('Edit');
    // Open the modal component
    // ...
  }
  deleteVechile(courtChargeID:number)
{
  this.courtChargeService.delete(courtChargeID,'courtChargeID').subscribe(
    (response) => {
      // Success logic, if needed
      // Remove the deleted region from the regions array
      const updatedVechiles = this.courtChargeType.filter(vechile => vechile.courtChargeID !== courtChargeID);
      this.courtChargeType = updatedVechiles;
    },
    (error) => {
      console.error('Error deleting region:', error);
    }
  );
  this.sucessNotification('data')


}
  editRegion(accidentTypeId: number) {
    this.courtChargeService.update(accidentTypeId);
  }
  sucessNotification(type:string):void{
    this.notification.success("Data Deleted Successfully","",{nzPlacement:'topRight'});
  }
  errorNotification(type:string):void{
    this.notification.error("Data was not Deleted",'',{nzPlacement:'topRight'})
  }
  showModal(action: string): void {
    this.sharedbuttonService.setButtonLabel(action);
    const modalRef = this.modal.create({
      nzTitle: 'Court Charg Type Master',
      nzContent: CourtChargeModalComponent,
      nzFooter: null,
      nzOnOk: () => {
        // This function will be called when the user clicks the OK button in the modal
        // You can perform any necessary actions here, such as closing the modal
        modalRef.destroy();

      },
      nzComponentParams: {
        action: action // Pass the action to the modal component
      } as Partial<CourtChargeModalComponent> // Type assertion to Partial<SharedModalComponent>

    });

    this.loadCourtCharge();

  }

}
