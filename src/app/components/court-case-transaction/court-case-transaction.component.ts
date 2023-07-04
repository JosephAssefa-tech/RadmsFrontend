import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzButtonType } from 'ng-zorro-antd/button';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { BehaviorSubject } from 'rxjs';
import { AccidentDetailsTransaction } from 'src/app/models/get/accident-details-transaction';
import { RegionMaster } from 'src/app/models/get/region';
import { ZoneMaster } from 'src/app/models/get/zone';
import { AccidentDetailsTransactionService } from 'src/app/services/accident-details-transaction/accident-details-transaction.service';
import { LanguageService } from 'src/app/services/language-change/language-change-service';
import { RegionsService } from 'src/app/services/region/regions.service';
import { SharedButtonLabelService } from 'src/app/services/shared-modal-button/shared-modal-button.service';
import { ZoneMasterService } from 'src/app/services/zone-service/zone-master.service';
import { AccidentCourtCaseModalComponent } from 'src/app/shared/accident-court-case-modal/accident-court-case-modal.component';
import { AirConditionModalComponent } from 'src/app/shared/air-condition-modal/air-condition-modal.component';

@Component({
  selector: 'app-court-case-transaction',
  templateUrl: './court-case-transaction.component.html',
  styleUrls: ['./court-case-transaction.component.scss']
})
export class CourtCaseTransactionComponent implements OnInit {
  loading = false; // Flag to indicate loading state
  selectedRegionId!:number;
  regionMasters$:BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  accidentDetails: AccidentDetailsTransaction[] = [];
  filteredAccidentDetails: AccidentDetailsTransaction[] = [];
  currentPage = 1;
  pageSize = 5;
  totalItems! :number;;
  showRegionFilter = false;
  regionsLoaded =true;
  regions: RegionMaster[] = []; // Replace with your actual region list
  zones:ZoneMaster[]=[];
  selectedRegions: string[] = [];
  form!: FormGroup;
    constructor(private zoneService:ZoneMasterService, public regionService:RegionsService, private sharedbuttonService: SharedButtonLabelService, private notification:NzNotificationService, private languageService:LanguageService,private fb: FormBuilder,private modal: NzModalService,private accidentDetailsService:AccidentDetailsTransactionService) { }
  
    ngOnInit(): void {
      this.languageService.selectedLanguage$.subscribe(language => {
        this.accidentDetailsService.getAirConditionsListByLanguage(language, this.currentPage, this.pageSize)
          .subscribe((response: any) => {
            this.accidentDetails = response.data;
            this.totalItems = response.totalCount;
            console.log("total records:", this.totalItems);
          });
          this.GetRegionMaster(language);
          this.GetZoneMaster(language);
      });
    
    }
    GetRegionMaster(language: string) {
      this.regionService.getAllByLanguage(language)
        .subscribe(
          (response: RegionMaster[]) => {
            this.regions = response;
            // Reset the selected option when the options change
            this.selectedRegions = [];
            
            console.log("regionssssssss");
            console.log(this.regions);
            console.log("regionssssssss");
          },
          (error) => {
            console.error('Error retrieving data:', error);
          }
        );
    }
    
    GetZoneMaster(language: string, selectedRegionId?: number) {
      this.zoneService.getAllByLanguage(language, selectedRegionId)
        .subscribe(
          (response: ZoneMaster[]) => {
            if (selectedRegionId) {
              // Filter zones based on the selected regionId
              this.zones = response;
              this.zones.forEach((zone: ZoneMaster) => {
                console.log("Zone ID:", zone.zoneId);
                console.log("Zone Name:", zone.zoneName);
                console.log("Region ID:", zone.region.regionId);
                console.log("Region Name:", zone.region.regionName);
              });
            } else {
              this.zones = response;
              this.zones.forEach((zone: ZoneMaster) => {
                console.log("Zone ID:", zone.zoneId);
                console.log("Zone Name:", zone.zoneName);
                console.log("Region ID:", zone.region.regionId);
                console.log("Region Name:", zone.region.regionName);
              });
            }
          },
          (error) => {
            console.error('Error retrieving data:', error);
          }
        );
    }
    
    
  
    openModal(accident: any): void {
      const modalRef = this.modal.create({
        nzTitle: 'Accident Court',
        nzContent: AccidentCourtCaseModalComponent,
        nzFooter: null,
        nzOnOk: () => {
          // This function will be called when the user clicks the OK button in the modal
          // You can perform any necessary actions here, such as closing the modal
          modalRef.destroy();
        },
        nzComponentParams: {
          selectedAccident: accident // Pass the selected accident to the modal component
        } as Partial<AccidentCourtCaseModalComponent> // Type assertion to Partial<AirConditionModalComponent>
      });
    
   //   this.loadAccidentDetails();
    }
    


    sucessNotification(type:string):void{
      this.notification.success("Data Deleted Successfully","",{nzPlacement:'topRight'});
    }
    errorNotification(type:string):void{
      this.notification.error("Data was not Deleted",'',{nzPlacement:'topRight'})
    }

    submitForm(): void {
      if (this.form.valid) {
        // Perform the form submission logic here
        console.log('Form submitted:', this.form.value);
      } else {
        // Handle form validation errors
        console.log('Form is invalid');
      }
    }
    onPageChange(page: number) {
      this.loading = true; // Show the spinner
      this.currentPage = page;
      this.languageService.selectedLanguage$.subscribe(language => {
        this.accidentDetailsService.getAirConditionsListByLanguage(language, this.currentPage, this.pageSize,this.selectedRegionId)
          .subscribe((response: any) => {
            this.accidentDetails = response.data;
            this.totalItems = response.totalCount;
            this.loading = false; // Hide the spinner
          });
      });
    }
    
    applyRegionFilter(): void {
      // Call the API with the selected regionId filter
      this.languageService.selectedLanguage$.subscribe(language => {
        this.accidentDetailsService.getAirConditionsListByLanguage(language, this.currentPage, this.pageSize, this.selectedRegionId)
        .subscribe((response: any) => {
          this.accidentDetails = response.data;
          this.totalItems = response.totalCount;
          console.log("total records:", this.totalItems);
          
          // Pass the selected regionId to the GetZoneMaster method
          this.GetZoneMaster(language, this.selectedRegionId);
        });
    });
  }
    
    
  }
