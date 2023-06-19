import { AboutComponent } from './components/about/about.component';
import { AccidentDetailsComponent } from './components/accident-details/accident-details.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonComponent } from './shared/button/button.component';
import { CityMasterComponent } from './components/city-master/city-master.component';
import { FormsBaseStateService } from './services/base-service/FormsBaseStateService';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { IconsProviderModule } from './icons-provider.module';
import { LoginComponent } from './components/login/login.component';
import { MapService } from './services/map-services/map.service';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { NzAffixModule } from 'ng-zorro-antd/affix';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzAnchorModule } from 'ng-zorro-antd/anchor';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzBackTopModule } from 'ng-zorro-antd/back-top';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCalendarModule } from 'ng-zorro-antd/calendar';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzCascaderModule } from 'ng-zorro-antd/cascader';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzCommentModule } from 'ng-zorro-antd/comment';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzI18nModule } from 'ng-zorro-antd/i18n';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzMentionModule } from 'ng-zorro-antd/mention';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzNoAnimationModule } from 'ng-zorro-antd/core/no-animation';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzRateModule } from 'ng-zorro-antd/rate';
import { NzResizableModule } from 'ng-zorro-antd/resizable';
import { NzResultModule } from 'ng-zorro-antd/result';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzSliderModule } from 'ng-zorro-antd/slider';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzStatisticModule } from 'ng-zorro-antd/statistic';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';
import { NzTimelineModule } from 'ng-zorro-antd/timeline';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzTransButtonModule } from 'ng-zorro-antd/core/trans-button';
import { NzTransferModule } from 'ng-zorro-antd/transfer';
import { NzTreeModule } from 'ng-zorro-antd/tree';
import { NzTreeSelectModule } from 'ng-zorro-antd/tree-select';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzWaveModule } from 'ng-zorro-antd/core/wave';
import { PoliceStationComponent } from './components/police-station/police-station.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegionComponent } from './components/region/region.component';
import { RouterModule } from '@angular/router';
import { SelectOptionsComponent } from './shared/select-options/select-options.component';
import { SharedModalComponent } from './shared/shared-modal/shared-modal.component';
import { SharedTableComponent } from './shared/shared-table/shared-table.component';
import { SideMenuPageComponent } from './components/side-menu-page/side-menu-page.component';
import { SidebarMenuComponent } from './components/sidebar-menu/sidebar-menu.component';
import { TextFieldComponent } from './shared/text-field/text-field.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import en from '@angular/common/locales/en';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import { VictimDetailsComponent } from './components/victim-details/victim-details.component';
import { VehicleDetailsComponent } from './components/vehicle-details/vehicle-details.component';
import { RoadInvolvedComponent } from './components/road-involved/road-involved.component';
import { AdvanceSearchComponent } from './components/advance-search/advance-search.component';
import { WoredaMasterComponent } from './components/woreda-master/woreda-master.component';
import { SubcityMasterComponent } from './components/subcity-master/subcity-master.component';
import { WoredaModalComponent } from './shared/woreda-modal/woreda-modal.component';
import { SubcityModalComponent } from './shared/subcity-modal/subcity-modal.component';
import { ZoneMasterComponent } from './components/zone-master/zone-master.component';
import{ZoneModalComponent} from './shared/zone-modal/zone-modal.component';
import { CityModalComponent } from './shared/city-modal/city-modal.component';
import { RecordCompletionDialogComponent } from './shared/record-completion-dialog/record-completion-dialog.component';
import { WeatherConditionComponent } from './components/weather-condition/weather-condition.component';
import { RoadSurfaceConditionComponent } from './components/road-surface-condition/road-surface-condition.component';
import { LightConditionComponent } from './components/light-condition/light-condition.component';
import { AirConditionComponent } from './components/air-condition/air-condition.component';
import { WeatherConditionModalComponent } from './shared/weather-condition-modal/weather-condition-modal.component';
import { RoadSurfaceModalComponent } from './shared/road-surface-modal/road-surface-modal.component';
import { HealthConditionComponent } from './components/health-condition/health-condition.component';
import { HealthConditionModalComponent } from './shared/health-condition-modal/health-condition-modal.component';
import { LightConditionModalComponent } from './shared/light-condition-modal/light-condition-modal.component';
import { VechileMasterComponent } from './components/vechile-master/vechile-master.component';
import { VechileDefectComponent } from './components/vechile-defect/vechile-defect.component';
import { VechileMovementMasterComponent } from './components/vechile-movement-master/vechile-movement-master.component';
import { VechileOwnershipComponent } from './components/vechile-ownership/vechile-ownership.component';
import { VechileRelationComponent } from './components/vechile-relation/vechile-relation.component';
import { VechileServiceAgeComponent } from './components/vechile-service-age/vechile-service-age.component';
import { SpeedLimitComponent } from './components/speed-limit/speed-limit.component';
import { VechileMasterModalComponent } from './shared/vechile-master-modal/vechile-master-modal.component';
import { VechileDefectModalComponent } from './shared/vechile-defect-modal/vechile-defect-modal.component';
import { VechileMovementModalComponent } from './shared/vechile-movement-modal/vechile-movement-modal.component';
import { VechileOwnerModalComponent } from './shared/vechile-owner-modal/vechile-owner-modal.component';
import { VechileRelationModalComponent } from './shared/vechile-relation-modal/vechile-relation-modal.component';
import { VechileServiceAgeModalComponent } from './shared/vechile-service-age-modal/vechile-service-age-modal.component';
import { SpeedModalComponent } from './shared/speed-modal/speed-modal.component';
import { AccidentCauseComponent } from './components/accident-cause/accident-cause.component';
import { AccidentTypeComponent } from './components/accident-type/accident-type.component';
import { CollisionTypeComponent } from './components/collision-type/collision-type.component';
import { EmploymentStatusComponent } from './components/employment-status/employment-status.component';
import { ImpactTypeComponent } from './components/impact-type/impact-type.component';
import { LicenseLevelComponent } from './components/license-level/license-level.component';
import { PavementTypeComponent } from './components/pavement-type/pavement-type.component';
import { PedestrianMovementComponent } from './components/pedestrian-movement/pedestrian-movement.component';
import { SeatingTypeComponent } from './components/seating-type/seating-type.component';
import { SeverityLevelComponent } from './components/severity-level/severity-level.component';
import { TerianTypeComponent } from './components/terian-type/terian-type.component';
import { UserTypeComponent } from './components/user-type/user-type.component';
import { VictimMovementComponent } from './components/victim-movement/victim-movement.component';
import { VictimTypeComponent } from './components/victim-type/victim-type.component';
import { VictimMovementTypeModalComponent } from './shared/victim-type-modal/victim-type-modal.component';
import { VictimMovementModalComponent } from './shared/victim-movement-modal/victim-movement-modal.component';
import { UserTypeModalComponent } from './shared/user-type-modal/user-type-modal.component';
import { AccidentCasuseModalComponent } from './shared/accident-casuse-modal/accident-casuse-modal.component';
import { AccidentTypeModalComponent } from './shared/accident-type-modal/accident-type-modal.component';
import { CollisionTypeModalComponent } from './shared/collision-type-modal/collision-type-modal.component';
import { EmploymentStatusModalComponent } from './shared/employment-status-modal/employment-status-modal.component';
import { ImpactTypeModalComponent } from './shared/impact-type-modal/impact-type-modal.component';
import { LicenseLevelModalComponent } from './shared/license-level-modal/license-level-modal.component';
import { PavementTypeModalComponent } from './shared/pavement-type-modal/pavement-type-modal.component';
import { PedstrianMovementModalComponent } from './shared/pedstrian-movement-modal/pedstrian-movement-modal.component';
import { SeatingTypeModalComponent } from './shared/seating-type-modal/seating-type-modal.component';
import { SeverityLevelModalComponent } from './shared/severity-level-modal/severity-level-modal.component';
import { TerianTypeModalComponent } from './shared/terian-type-modal/terian-type-modal.component';
import { HighwayMasterComponent } from './components/highway-master/highway-master.component';
import { HighwayTypeComponent } from './components/highway-type/highway-type.component';
import { JunctionTypeComponent } from './components/junction-type/junction-type.component';
import { LandmarkTypeComponent } from './components/landmark-type/landmark-type.component';
import { RoadCarriagewayTypeComponent } from './components/road-carriageway-type/road-carriageway-type.component';
import { HighwayMasterModalComponent } from './shared/highway-master-modal/highway-master-modal.component';
import { HighwayTypeModalComponent } from './shared/highway-type-modal/highway-type-modal.component';
import { JunctionTypeModalComponent } from './shared/junction-type-modal/junction-type-modal.component';
import { LandmarkTypeModalComponent } from './shared/landmark-type-modal/landmark-type-modal.component';
import { RoadcaarriagewayTypeModalComponent } from './shared/roadcaarriageway-type-modal/roadcaarriageway-type-modal.component';
import { AirConditionModalComponent } from './shared/air-condition-modal/air-condition-modal.component';
import { EducationLevelComponent } from './components/education-level/education-level.component';
import { EducationLevelModalComponent } from './shared/education-level-modal/education-level-modal.component';
import { DriverExperienceModalComponent } from './shared/driver-experience-modal/driver-experience-modal.component';
import { DriverExperienceComponent } from './components/driver-experience/driver-experience.component';
import { DriverLicenseCategoryComponent } from './components/driver-license-category/driver-license-category.component';
import { DriverLicenseCategoryModalComponent } from './shared/driver-license-category-modal/driver-license-category-modal.component';

import { TelerikReportingModule } from '@progress/telerik-angular-report-viewer';
import { DailyAccidentReportComponent } from './components/reporting/daily-accident-report/daily-accident-report.component';
import { HourlyAccidentReportComponent } from './components/reporting/hourly-accident-report/hourly-accident-report.component';
import { AccidentInvolvedDriversAgeReportComponent } from './components/reporting/accident-involved-drivers-age-report/accident-involved-drivers-age-report.component';
import { AccidentInvolvedDriversSexReportComponent } from './components/reporting/accident-involved-drivers-sex-report/accident-involved-drivers-sex-report.component';
import { AccidentInvolvedDriversEducationLevelReportComponent } from './components/reporting/accident-involved-drivers-education-level-report/accident-involved-drivers-education-level-report.component';
import { DriverAndVehicleRelationshipReportComponent } from './components/reporting/driver-and-vehicle-relationship-report/driver-and-vehicle-relationship-report.component';
import { DrivingExperienceOfDriversReportComponent } from './components/reporting/driving-experience-of-drivers-report/driving-experience-of-drivers-report.component';
import { LevelOfDrivingLicenseReportComponent } from './components/reporting/level-of-driving-license-report/level-of-driving-license-report.component';
import { ServiceAgeOfVehiclesReportComponent } from './components/reporting/service-age-of-vehicles-report/service-age-of-vehicles-report.component';
import { AccidentInvolvedVehicleByTypeReportComponent } from './components/reporting/accident-involved-vehicle-by-type-report/accident-involved-vehicle-by-type-report.component';
import { OwnersAndTypeOfVehiclesReportComponent } from './components/reporting/owners-and-type-of-vehicles-report/owners-and-type-of-vehicles-report.component';
import { VehicleDefectReportComponent } from './components/reporting/vehicle-defect-report/vehicle-defect-report.component';
import { AccidentByRoadTypeReportComponent } from './components/reporting/accident-by-road-type-report/accident-by-road-type-report.component';
import { AccidentByRoadAreaReportComponent } from './components/reporting/accident-by-road-area-report/accident-by-road-area-report.component';
import { AccidentByRoadDividentReportComponent } from './components/reporting/accident-by-road-divident-report/accident-by-road-divident-report.component';
import { AccidentByRoadSurfaceReportComponent } from './components/reporting/accident-by-road-surface-report/accident-by-road-surface-report.component';
import { AccidentByPavementTypeReportComponent } from './components/reporting/accident-by-pavement-type-report/accident-by-pavement-type-report.component';
import { AccidentByRoadConditionReportComponent } from './components/reporting/accident-by-road-condition-report/accident-by-road-condition-report.component';
import { AccidentByRoadLightConditionReportComponent } from './components/reporting/accident-by-road-light-condition-report/accident-by-road-light-condition-report.component';
import { AccidentByJunctionTypeReportComponent } from './components/reporting/accident-by-junction-type-report/accident-by-junction-type-report.component';
import { AccidentByRoadAirConditionReportComponent } from './components/reporting/accident-by-road-air-condition-report/accident-by-road-air-condition-report.component';
import { AccidentByVehicleMovementReportComponent } from './components/reporting/accident-by-vehicle-movement-report/accident-by-vehicle-movement-report.component';
import { AccidentByCollisionTypeReportComponent } from './components/reporting/accident-by-collision-type-report/accident-by-collision-type-report.component';
import { AccidentByPedestrianHealthReportComponent } from './components/reporting/accident-by-pedestrian-health-report/accident-by-pedestrian-health-report.component';
import { AccidentByPedestrianJobTypeReportComponent } from './components/reporting/accident-by-pedestrian-job-type-report/accident-by-pedestrian-job-type-report.component';
import { AccidentByPedestrianMovementReportComponent } from './components/reporting/accident-by-pedestrian-movement-report/accident-by-pedestrian-movement-report.component';
import { AccidentByCauseOfAccidentReportComponent } from './components/reporting/accident-by-cause-of-accident-report/accident-by-cause-of-accident-report.component';
import { NumberOfVictimsInAccidentReportComponent } from './components/reporting/number-of-victims-in-accident-report/number-of-victims-in-accident-report.component';
import { InsuranceDetailReportComponent } from './components/reporting/insurance-detail-report/insurance-detail-report.component';
import { VictimAnimalsReportComponent } from './components/reporting/victim-animals-report/victim-animals-report.component';
import { VictimVehiclesReportComponent } from './components/reporting/victim-vehicles-report/victim-vehicles-report.component';
import { PreviousYearInvestigationReportComponent } from './components/reporting/previous-year-investigation-report/previous-year-investigation-report.component';
import { LegalMeasurementReportComponent } from './components/reporting/legal-measurement-report/legal-measurement-report.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    SidebarMenuComponent,
    HomeComponent,
    AboutComponent,
    AccidentDetailsComponent,
    WelcomeComponent,
    LoginComponent,
    ButtonComponent,
    SideMenuPageComponent,
    RegionComponent,
    TextFieldComponent,
    CityMasterComponent,
    SharedModalComponent,
    SharedTableComponent,
    PoliceStationComponent,
    SelectOptionsComponent,
    VictimDetailsComponent,
    VehicleDetailsComponent,
    RoadInvolvedComponent,
    AdvanceSearchComponent,
    WoredaMasterComponent,
    SubcityMasterComponent,
    WoredaModalComponent,
    ZoneModalComponent,
    SubcityModalComponent,
    ZoneMasterComponent,
    CityModalComponent,
    RecordCompletionDialogComponent,
    WeatherConditionComponent,
    RoadSurfaceConditionComponent,
    LightConditionComponent,
    AirConditionComponent,
    WeatherConditionModalComponent,
    RoadSurfaceModalComponent,
    HealthConditionComponent,
    HealthConditionModalComponent,
    LightConditionModalComponent,
    VechileMasterComponent,
    VechileDefectComponent,
    VechileMovementMasterComponent,
    VechileOwnershipComponent,
    VechileRelationComponent,
    VechileServiceAgeComponent,
    SpeedLimitComponent,
    VechileMasterModalComponent,
    VechileDefectModalComponent,
    VechileMovementModalComponent,
    VechileOwnerModalComponent,
    VechileRelationModalComponent,
    VechileServiceAgeModalComponent,
    SpeedModalComponent,
    AccidentCauseComponent,
    AccidentTypeComponent,
    CollisionTypeComponent,
    EmploymentStatusComponent,
    ImpactTypeComponent,
    LicenseLevelComponent,
    PavementTypeComponent,
    PedestrianMovementComponent,
    SeatingTypeComponent,
    SeverityLevelComponent,
    TerianTypeComponent,
    UserTypeComponent,
    VictimMovementComponent,
    VictimTypeComponent,
    VictimMovementTypeModalComponent,
    VictimMovementModalComponent,
    UserTypeModalComponent,
    AccidentCasuseModalComponent,
    AccidentTypeModalComponent,
    CollisionTypeModalComponent,
    EmploymentStatusModalComponent,
    ImpactTypeModalComponent,
    LicenseLevelModalComponent,
    PavementTypeModalComponent,
    PedstrianMovementModalComponent,
    SeatingTypeModalComponent,
    SeverityLevelModalComponent,
    TerianTypeModalComponent,
    HighwayMasterComponent,
    HighwayTypeComponent,
    JunctionTypeComponent,
    LandmarkTypeComponent,
    RoadCarriagewayTypeComponent,
    HighwayMasterModalComponent,
    HighwayTypeModalComponent,
    JunctionTypeModalComponent,
    LandmarkTypeModalComponent,
    RoadcaarriagewayTypeModalComponent,
    AirConditionModalComponent,
    EducationLevelComponent,
    EducationLevelModalComponent,
    DriverExperienceModalComponent,
    DriverExperienceComponent,
    DriverLicenseCategoryComponent,
    DriverLicenseCategoryModalComponent,
    DailyAccidentReportComponent,
    HourlyAccidentReportComponent,
    AccidentInvolvedDriversAgeReportComponent,
    AccidentInvolvedDriversSexReportComponent,
    AccidentInvolvedDriversEducationLevelReportComponent,
    DriverAndVehicleRelationshipReportComponent,
    DrivingExperienceOfDriversReportComponent,
    LevelOfDrivingLicenseReportComponent,
    ServiceAgeOfVehiclesReportComponent,
    AccidentInvolvedVehicleByTypeReportComponent,
    OwnersAndTypeOfVehiclesReportComponent,
    VehicleDefectReportComponent,
    AccidentByRoadTypeReportComponent,
    AccidentByRoadAreaReportComponent,
    AccidentByRoadDividentReportComponent,
    AccidentByRoadSurfaceReportComponent,
    AccidentByPavementTypeReportComponent,
    AccidentByRoadConditionReportComponent,
    AccidentByRoadLightConditionReportComponent,
    AccidentByJunctionTypeReportComponent,
    AccidentByRoadAirConditionReportComponent,
    AccidentByVehicleMovementReportComponent,
    AccidentByCollisionTypeReportComponent,
    AccidentByPedestrianHealthReportComponent,
    AccidentByPedestrianJobTypeReportComponent,
    AccidentByPedestrianMovementReportComponent,
    AccidentByCauseOfAccidentReportComponent,
    NumberOfVictimsInAccidentReportComponent,
    InsuranceDetailReportComponent,
    VictimAnimalsReportComponent,
    VictimVehiclesReportComponent,
    PreviousYearInvestigationReportComponent,
    LegalMeasurementReportComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NzLayoutModule,
    NzMenuModule,
    NzInputModule,
    NzFormModule,
    NzButtonModule,
    NzAffixModule,
    NzAlertModule,
    NzAnchorModule,
    NzAutocompleteModule,
    NzAvatarModule,
    NzBackTopModule,
    NzBadgeModule,
    NzButtonModule,
    NzBreadCrumbModule,
    NzCalendarModule,
    NzCardModule,
    NzCarouselModule,
    NzCascaderModule,
    NzCheckboxModule,
    NzCollapseModule,
    NzCommentModule,
    NzDatePickerModule,
    NzDescriptionsModule,
    NzDividerModule,
    NzDrawerModule,
    NzDropDownModule,
    NzEmptyModule,
    NzFormModule,
    NzGridModule,
    NzI18nModule,
    NzIconModule,
    NzInputModule,
    NzInputNumberModule,
    NzLayoutModule,
    NzListModule,
    NzMentionModule,
    NzMenuModule,
    NzMessageModule,
    NzModalModule,
    NzNoAnimationModule,
    NzNotificationModule,
    NzPageHeaderModule,
    NzPaginationModule,
    NzPopconfirmModule,
    NzPopoverModule,
    NzProgressModule,
    NzRadioModule,
    NzRateModule,
    NzResultModule,
    NzSelectModule,
    NzSkeletonModule,
    NzSliderModule,
    NzSpinModule,
    NzStatisticModule,
    NzStepsModule,
    NzSwitchModule,
    NzTableModule,
    NzTabsModule,
    NzTagModule,
    NzTimePickerModule,
    NzTimelineModule,
    NzToolTipModule,
    NzTransButtonModule,
    NzTransferModule,
    NzTreeModule,
    NzTreeSelectModule,
    NzTypographyModule,
    NzUploadModule,
    NzWaveModule,
    NzResizableModule,
    NzImageModule,
    NzTabsModule,
    NzMenuModule,
    NzTabsModule,
    NzInputModule,
    NzButtonModule,
    NzSelectModule,
    IconsProviderModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', component:LoginComponent},
      { path: 'home', component: HomeComponent },
      { path: 'accident', component: AccidentDetailsComponent },
    ]),
    NzLayoutModule,
    TelerikReportingModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US },MapService,FormsBaseStateService],
  bootstrap: [AppComponent],
    entryComponents: [LoginComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
